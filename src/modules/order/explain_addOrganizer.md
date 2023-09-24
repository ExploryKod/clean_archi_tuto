# Process général

1. React - Dans la section ou les pages
- Creation de l'UI (ici une checkbox)
- Création de la logique React (fonction vide dans le présenter - appel du presenter dans l'UI Jsx)

2. Core - Dans le bon dossier (ici form)
TDD:
- Création du 1er test (dummy test)
- Création de la 'dummy' logique de base 

3. Core - Dans la bonne class 
- Création de la logique pour répondre au test

4. Core - retour au 2e test etc.... (cycle TDD)

5. React - Une fois tous les tests et la logique ok :
- Création des fonctions proprement dites dans le presenter

6. Test sur l'UI comme un bêta utilisateur mais en allant plus loin (inspecteur, logs...)

# Exemple avec l'ajout d'un organisateur
