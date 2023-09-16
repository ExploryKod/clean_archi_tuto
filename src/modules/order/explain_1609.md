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
>- ***it*** > **description** contrainte/resultat 
>-***expect*** - ***toEqual*** > **vérification** d'obtention du bon output de la fonctionnalité (résultat)
on aura une instanciation de l'objet (new ...)
on aura un ***state*** > le résultat de l'appel de la méthode de la class

On crée des class dans nos fichiers de type de guest.form
Dans le test, on veux récup le nouveau state : on va fonctionner avec un paradigme fonctionnel à l'intérieur d'une class
chaque *method* retourne un nouvel *objet* qui sera le nouveau *state*

On se facilite la tâche avec **Wallaby** >> utilitaire de test (plugin)