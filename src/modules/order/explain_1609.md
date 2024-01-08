# Ajouter un guest

## Création dossier core dans order
- Nous sortons de react pour entrer dans le coeur de notre application
- Nous créons le domain model de notre core > **dossier core/model**

### core/model
- création d'un fichier ordering.domain-model.ts
- Dans ce fichier : définition d'un namespace qui contient les objets, es entités, les définitions, les types de notre model
- On a donc plus besoin de définir un type dans use-guest-section.ts par exemple (le type Guest disparait).
A place OrderingDomainModal.guest peut devenir le type à appeler (import nécessaire du namespace)


### Retour dans react/sections/use-guest-section.ts 
- Remplacement par un type issu de mon domain-model de core (hors react mais dans order)

## core/form
- Nous voulons ajouter un guest / retirer un guest 
- Ces deux fonctionnalités sont liées à un formulaire (son UI est dans react > GuestSection)
- On va donc créer un dossier **core/form** pour y traiter les fonctions d'ajout/retirer un guest
- Création d'un fichier pour traiter ce formulaire ***guest.form.ts***
- Pour faire ces fonctions ajout/retirer on va créer des tests dans un fichier parallèle : ***guest.form.test.ts***

### TDD - Création des tests dans le fichier de test
- Structure: 
>- ***describe*** > **description** action de la fonctionnalité
>- dans describe (2e param sera une fonction) : ***it*** > **description** contrainte/resultat 
>-dans it(2e param sera une fonction): ***expect*** - ***toEqual*** > **vérification** d'obtention du bon output de la fonctionnalité (résultat)
on aura une instanciation de l'objet (new ...)
on aura un ***state*** > le résultat de l'appel de la méthode de la class

On crée des class dans nos fichiers de type de guest.form
Dans le test, on veux récup le nouveau state : on va fonctionner avec un **paradigme fonctionnel** à l'intérieur d'une class
chaque *method* retourne un nouvel *objet* qui sera le nouveau *state*

On se facilite la tâche avec **Wallaby** >> utilitaire de test (plugin)
Il faut aussi configurer Jest > jest.config.ts
Il faut que le linter l'ignore (lintignore)

On passe un état et on récup un autre état 
InitialState sera un tableau vide > quand on le passe dans la méthod, le test retourne un nouveau tableau
Pour cela il me faut passer un tableau de guest à addGuest dans form.guest 
avec le bon type issu du model > orderingDomainModel.Guest[]

# Connexion de notre domain à notre application React
### Retour dans le presenter de guestSection
- Pour séparer le domaine complètement de notre application React:
> On répète les fonctions de guest.form.ts dans le présenter et on va prendre la donnée issu du core/guest.form.ts
> Là on utilisera useRef avec current dans lequel on instancie une nouvel objet (celui de guest.form) à chaque fois qu'on monte le nouvel état du composant react (useState).
A ce stade on a forcé la donnée : l'ajout donnera toujours John Doe mais on voit bien que la donnée apparait dans l'UI React.


>`npm run test` permet de créer des test et un dossier coverage est donc créé

# Traiter le problème des id et création du dossier modules/core
On va utiliser nanoid version 3.3.6 
on teste des id aléatoires en utilisant nanoid() sur l'id de notre méthode 
(via une fonction de jest: expect.any(String) on peux checker le type mais pas l'id lui-même) 
= Mais on perd en testabilité si  car on aura pas d'id identique entre les test et l'application
On doit donc combiner l'usage de nanoid avec un idprovider

## Création d'un dossier core dans modules à l'occasion de la création d'un id provider
modules/core sera donc le coeur de l'application en général

### Création d'un id provider et injection d'une dépendance
- Création d'une interface qui retourne un string via une méthode *generate*
- Création d'une class systemIdProvider qui va implémenter l'interface > donc a une méthode generate qui retourne un string
- ce string est donné via nanoid() (string d'id aléatoire et unique)
- On va avoir besoin d'injecter cette dépendance (idprovider) dans notre app 
- Pour cela on va créer un constructeur dans la class GuestForm de react/sections/presenter qui requière un id pour des méthodes (addGuest)
- Cet ajout sera en private dans **le GuestForm de react** > l'instanciation de la class idprovider dans GuestForm (génère un id toujours différent). >>> `const guestForm = useRef(new GuestForm(new SystemIdProvider()));`

>***Problème:*** 
- Nous voulons éviter de devoir réécrire l'instanciation de SystemIdProvider partout si on le change. 
- Nous allons donc l'ajouter à notre liste de dépendance : 
>>>**store/dependencies** va gérer les types de mes dépendances
>>>***app/main.ts*** (point d'entrée) on instancie une bonne fois pour toute l'id provider ici dans le setup des dépendances

## Création d'un dependencies provider dans react 
- A la racine de React on rend accessible les dépendances depuis le context avec l'API Context
- On y utilise createContext 

**Nous créons donc le composant du provider de la react context API en utilisant children:** 

>```
>import { Dependencies } from '@taotask/modules/store/dependencies'
>import { app } from '@taotask/modules/app/main'
>import { createContext } from 'react'
>
>const DependenciesContext = createContext<Dependencies>(null as any)
>
>export const DependenciesProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
>    return <DependenciesContext.Provider value={app.dependencies}>
>        {children}
>    </DependenciesContext.Provider>
>   }
>```

Il faut ensuite créer dans le wrapper :
    ```  <DependenciesProvider>
    {children}
    </DependenciesProvider>
    ```
### Meilleure injection de dépendance sur react
Un problème peut donc se résoudre : use-guest-section ne devrait rien connaître de app issu de main.ts 
En effet cela veut dire que l'on ne se garantie pas des changements de main.ts
Ce problème est résolu en usant de la context API : ce n'est plus app mais useDependencies que va connaître la section
via useDependencies on a donc un seul sens de dépendance car main.ts viole les principes et on peut avoir plusieurs sens de dépendance.

Pour être rigoureux > on doit aussi agir sur le DependenciesProvider qui lui aussi fait appel à main.ts
Le seul qui peut appeler app (main.ts) ce sera donc AppWrapper
Si on veut tester notre application avec d'autres dépendances on aura donc qu'à créer un dependenciesProvider de plus
