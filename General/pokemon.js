// Afegeix aquí el codi de JS per a la pàgina pokemon.html

function getPokemon(idPokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then((res) =>
    res.json()
  );
}


