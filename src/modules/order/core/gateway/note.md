# Gateway

### Gateway est une passerelle pour récupérer les tables issues de sources externes

- En architecture hexagonale on appelle cette interface un port
- Ce port se place entre mon domain et l'infastructure
- Aprés on doit créer un adapteur pour implémenter ce port

### Process validation reservation

- Je créer l'UI / presenter
- Je créer mes types dans le gateway : reservation.gateway.ts & reserveDTO
- Je commence mon usecase (test + usecase) (je le branche à l'UI via le presenter avant > OnNext)
- Je vais vouloir créer des tests et pour cela je crée un Mock (MockReservationGateway) dans testing
- Je dois donc l'ajouter à mes dépendances (dependencies.ts)
- Je dois donc ajouter à test.environnemenyt.ts le new MockR.... pat défault
- On peux commencer à créer nos tests avec un creatStore et sa dépendance (voir ...usecase.test.ts)
- Création de la fake data dans les test : orderForm (faux form) et le faux state qui reprend tout > on le passe à l'initialState
- 

