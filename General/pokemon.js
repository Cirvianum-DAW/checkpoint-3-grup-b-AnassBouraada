// Afegeix aquí el codi de JS per a la pàgina pokemon.html

function getPokemonInfo(idPokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((res) => res.json())
    .then((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      habilitats: pokemon.abilities,
      sprites: pokemon.sprites,
    }));
}

async function mostrarInfoPokemon(id) {
  try {
    
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarInfoPokemon(4);

// getPokemonInfo(2);
