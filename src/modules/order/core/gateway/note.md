# Gateway

### Gateway est une passerelle pour récupérer les tables issues de sources externes

- En architecture hexagonale on appelle cette interface un port
- Ce port se place entre mon domain et l'infastructure
- Aprés on doit créer un adapteur pour implémenter ce port

### Process validation reservation

- Je créer l'UI / presenter
- Je créer mes types dans le gateway : reservation.gateway.ts & reserveDTO
- Je commence mon usecase (test + usecase) (je le branche à l'UI via le presenter avant > OnNext)
- 