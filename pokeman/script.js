let detailedPokeman = [];
let allPokeman = [];

async function getPokemons() {
  try {
    const API = "https://pokeapi.co/api/v2/pokemon/";
    const pokemans = await (await fetch(API)).json();
    const urls = pokemans.results.map((pokeman) => pokeman.url);
    for (let url of urls) {
      const details = await (await fetch(url)).json();
      detailedPokeman.push(details);
    }
    allPokeman = [...detailedPokeman]; // Keep a copy of all data
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  detailedPokeman = allPokeman.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value)
  );
  renderList();
});

const cards = document.querySelector(".cards");

function renderList() {
  cards.innerHTML = ""; // Clear old cards
  detailedPokeman.forEach((pokeman) => {
    cards.append(createCard(pokeman));
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await getPokemons();
  renderList();
});

function createCard(pokeman) {
  const li = document.createElement("li");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = pokeman.sprites.other["dream_world"]["front_default"];
  img.classList.add("pokemon-image");
  figure.append(img);
  li.classList.add("pokemon-card");
  li.append(figure);

  const h1 = document.createElement("h1"); // fixed typo
  h1.textContent = pokeman.name;
  h1.classList.add("pokemon-name");
  h1.style.textAlign = "center";

  const divInfo = document.createElement("div");
  divInfo.classList.add("pokemon-info", "pokemon-highlight");
  const p = document.createElement("p");

  let types = pokeman.types.map((t) => t.type.name).join(", ");
  p.textContent = types;
  divInfo.append(p);

  li.append(h1);
  li.append(divInfo);

  li.insertAdjacentHTML(
    "beforeend",
    `
    <div class="grid-three-cols">
      <p class="pokemon-info"><span>Height:</span> ${pokeman.height}</p>
      <p class="pokemon-info"><span>Weight:</span> ${pokeman.weight}</p>
      <p class="pokemon-info"><span>Speed:</span> ${pokeman.stats[5].base_stat}</p>
    </div>
    <div class="grid-three-cols">
      <p class="pokemon-info"><span>Abilities:</span> ${pokeman.abilities[0].ability.name}</p>
      <p class="pokemon-info"><span>Experience:</span> ${pokeman.base_experience}</p>
      <p class="pokemon-info"><span>Height:</span> ${pokeman.height}</p>
    </div>
    `
  );

  return li;
}
 