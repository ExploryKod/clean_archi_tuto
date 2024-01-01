1. # Création des tests 
- On commence par le plus "idiot" > remove si le state est vide
- Pour faciliter le refactoring nous avons hoister nos variables (les mettre en globale sur le fichier)
- Mais attention cela n'est viable

## hoisting en TDD > seulement si c'est stateless
On hoiste nos states (intéressant pour refactor ensuite)
- Cela n'est possible que si on reste stateless 
-La class GuestForm est donc stateless sauf pour son paramètre IIDProvider qui est stateful mais on ne le changera pas (auto-discipline) 
- d'où on peux se permettre de hoister cet objet

2. # Création de la méthode removeGuest dans form (hors-react)
3. # Création de la méthode dans le présenter en utilisant useRef et instanciation d'objet 
4. # Test sur l'UI directement (via des console.log ici car on a pas encore la possibilité de changer les champs via l'UI)
5. # Refactor & Validations (ajout de tests) (voir le .md à ce sujet)
*
-----------------------------------------
# Defs utiles dans ce doc:

## UseRef
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

**Tracking State Changes**
The useRef Hook can also be used to keep track of previous state values.
This is because we are able to persist useRef values between renders.

*Example:*
Use useRef to keep track of previous state values:

```import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

## Stateless vs Stateful
>>**Source**: [Cliquez ici](https://www.redhat.com/fr/topics/cloud-native-apps/stateful-vs-stateless)
***Les applications et processus stateful, quant à eux, peuvent être réutilisés indéfiniment. Les plateformes bancaires en ligne et les messageries en sont deux exemples. Les transactions précédentes sont prises en compte et peuvent affecter la transaction actuelle. C'est pour cela que les applications stateful utilisent les mêmes serveurs chaque fois qu'elles traitent une requête d'un utilisateur.***

***Un processus ou une application stateless est indépendant. Il ne stocke pas de données et ne fait référence à aucune transaction passée. Chaque transaction est effectuée à partir de rien, comme si c'était la première fois. Les applications stateless fournissent un service ou une fonction et utilisent un réseau de diffusion de contenu, le web ou des serveurs d'impression pour traiter ces requêtes à court terme.*** 
***Par exemple, une recherche en ligne pour répondre à une question quelconque est une transaction stateless. Vous tapez votre question dans le moteur de recherche et appuyez sur Entrée. Si votre transaction est accidentellement interrompue ou fermée, vous devez en démarrer une nouvelle. Les transactions stateless sont comparables à des distributeurs automatiques : une seule requête et une seule réponse.*** 

