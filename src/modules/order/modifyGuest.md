# Modify a guest

## React
1. React - Nous avons une fonction onChange qui prendra la valeur donnée par l'utilisateur 
2. Présenter > fonction upgradeGuest qui donne le feu vert si c'est le bon id, alors on modifie une des valeurs 
> A ce stade cette fonction ne renvoit rien - Il faut d'abord créer la vrai fonction dans core

## Core
1. Core/test - On crée un 1er test (le plus simple) pour la fonction upgradeGuest > on change le firstName
>> Cette fois on prend un index du tableau de guest, ici le 1er guest (guests[0]) pour accés direct à un objet avec id, firstName ...
>> On veux pas ajouter un guest mais directement accéder à un guest
2. Core - On crée la fonction upgradeGuest qui prendra en paramètre le state, l'id et les valeurs à modifier
3. On vérifie que le 1er test est ok 

## Typage

Usage de <code>keyof</code> et d' <code> extends </code> pour typer la fonction upgradeGuest:
(T prend le typage de toute les clés de l'objet Guest)

```ts
  upgradeGuest<T extends keyof OrderingDomainModel.Guest>(
        state: OrderingDomainModel.Form, 
        id:string, 
        key:T, 
        value:OrderingDomainModel.Guest[T]) {
```

## Algo
> Pour modifier un guest on se sert du spread operator qui va redonner les data exact mais en modifiant la valeur demandée
> On check si c'est le bon id (égal à ce lui passé par le paramètre donc le guest dont le champ est touché)
> La fonction upgrade guest prend une clé et une valeur en paramètre > on ajoute [key]: value aprés le spread operator sur ...guests et donc ça updatera le guest (ça n'ajoutera pas une nouvelle clé car elle est identique à l'une qui existe déjà)

