// Afegeix aquí el codi de JS per a la pàgina pokemon.html

function getPokemonInfo(idPokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((res) => res.json())
    .then((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      habilitats: pokemon.abilities.map((ability) => ability.ability.name),
      sprites: pokemon.sprites,
    }));
}

async function mostrarInfoPokemon(id) {
  try {
    const pokemon = await getPokemonInfo(id);

    const nameElement = document.getElementById("name");
    const heightElement = document.getElementById("height");
    const weightElement = document.getElementById("weight");
    const abilitiesElement = document.getElementById("abilities");
    const spriteElement = document.getElementById("sprite");

    nameElement.textContent = pokemon.name;
    heightElement.textContent = `Height: ${pokemon.height}`;
    weightElement.textContent = `Weight: ${pokemon.weight}`;

    const abilitiesList = abilitiesElement.querySelector("ul");
    abilitiesList.innerHTML = "";
    pokemon.habilitats.forEach((ability) => {
      const li = document.createElement("li");
      li.textContent = ability;
      abilitiesList.appendChild(li);
    });

    spriteElement.src = pokemon.sprites.front_default;
    spriteElement.alt = pokemon.name;
  } catch (error) {
    alert("No hi ha cap pokemon");
  }
}

document.getElementById("idpokemon").addEventListener("click", (event) => {
  event.preventDefault();
  const idPokemon = document.getElementById("idpokemontext").value;
  mostrarInfoPokemon(idPokemon);
  document.getElementById("idpokemontext").value = "";
});
