# Exercici API

- Aquest exercici implica l'ús de tots els coneixments apresos fins ara durant el curs.

Per tant la nota final d'aquest exercici serà la mateixa per totes les UFs amb la ponderació corresponent a cada UF.

**Important**: En funció de si l'error és més o menys greu, es pot penalitzar amb 0,25p o 0,5p. Finalment hi ha 1 punt global que s'avaluarà en funció de la qualitat del codi, la seva estructura, la seva llegibilitat <i els comentaris que hi hagi.

## Repte 1 - Pokemon API (2p)

Pots fer servir la tècnica que prefereixis per a fer les peticions a l'API de Pokémon (fetch, axios, etc.) així com la gestió de respostes i errors (incorpora també aquesta gestió d'errors!).

Fes un cop d'ull a l'API de Pokémon: https://pokeapi.co/ així com a la seva documentació específica: https://pokeapi.co/docs/v2. Veuràs que tens una petita interfície per a provar les diferents peticions que pots fer a l'API.

Crea un fitxer `pokemon.js` i resol les següents qüestions:

- Busca l'endpoint "Pokemon" que et permetrà obtenir la informació d'un Pokemon concret a través de l'endpoint `https://pokeapi.co/api/v2/pokemon/{id or name}/`.
- Fes una funció que faci una petició a l'API per a obtenir informació d'un Pokémon concret. La funció ha de **rebre un paràmetre amb l'ID del Pokémon** i ha de **retornar un objecte** amb la següent informació (tal i com la obteniu de l'API):

  - `id`: l'ID del Pokémon.
  - `name`: el nom del Pokémon.
  - `height`: l'alçada del Pokémon.
  - `weight`: el pes del Pokémon.
  - `habilitats`: l'objecte `abilities` amb les habilitats del Pokémon (pots tenir més d'una habilitat).
  - `sprites`: l'objecte `sprites` amb les imatges del Pokémon (segurament hi haurà més d'una imatge).

  Assegura't que pots fer crides a aquesta funció amb diferents ID's de Pokémon i que et retorna la informació correcta.

## Repte 2 - Mostrar Informació (3p)

Ara que ja tens la informació dels Pokémon, fes una funció que, donat un ID de Pokémon, mostri la informació d'aquest Pokémon a la pàgina web. Has de tenir en compte el següent:

- Has de fer servir la funció que has creat a l'exercici anterior per a obtenir la informació del Pokémon.
- Has de mostrar la informació del Pokémon a la pàgina web. Preferentment creant els continguts de manera dinàmica.
- Hauràs de mostrar el nom de les habilitats del Pokémon.
- Has de mostrar la imatge del Pokémon a la pàgina web. Pots fer servir la imatge que vulguis (la primera, la segona, etc.).
- Aquesta part és més embolicada... deixa-ho pel final potser! Hauràs d'afegir, a sota el nom de l'habilitat, la descripció d'aquesta (`effect_entries`) en anglès (compte! per obtenir la descripció hauràs de fer una altra petició a la URL que t'indiquen sota la propietat `abilities` i veuràs que l'endpoint de l'API et retorna les habilitats en diferents idiomes!).
- Comprova que la informació es mostra correctament a la pàgina web.

Tens a disposició un HTML amb una estructura senzilla i alguns estils de Tailwind per a mostrar la informació del Pokémon:

## Repte 3 - Interfície millorada (1p)

Finalment anem a millorar una mica la interfície de la nostra pàgina web. Afegeix els següents elements:

- Un camp i un botó per a realitzar la cerca del Pokémon. Quan l'usuari faci clic al botó, s'ha de mostrar la informació del Pokémon corresponent a l'ID o el nom del Pokemon introduït.
- Un missatge d'error si l'usuari introdueix un ID de Pokémon que no existeix a la base de dades o si hi ha algun problema amb la connexió a l'API.

## Repte 4 - Recursivitat - Pokemons amb les mateixes habilitats (2p)

- A sota de la informació del Pokémon que s'està mostrant, hauràs de mostrar una llista dels Pokemons que tenen les mateixes habilitats. Simplement has de mostrar el Nom i la Foto d'aquest. Aquest llistat de Pokemons el trobaràs a l'endpoint de l'habilitat dins l'objecte `pokemon`. Veuràs que cada habilitat té un `url` que et permetrà obtenir la informació dels Pokemons que tenen aquesta habilitat. Per obtenir la nota màxima d'aquest exercici, hauràs de fer servir Promise.all per a obtenir la informació de tots els Pokemons amb les mateixes habilitats. Intenta pensar com aprofitar el cicle de vida del codi actual per a obtenir aquesta informació.
