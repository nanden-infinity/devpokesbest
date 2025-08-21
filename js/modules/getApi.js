export default async function getApi(dados) {
  const pokemonsAll = await (await fetch(dados)).json();
  const { results } = pokemonsAll;
  const global = document.querySelector(".wrapper--cars");
  results.map(async ({ name, url }) => {
    const itemsPokemons = await (await fetch(url)).json();
    const {
      sprites: { front_default: imagens },
    } = itemsPokemons;
    const containerApp = document.createElement("div");
    containerApp.innerHTML = `
                    <figure class="relative shadow-xl gap-4 cursor-pointer  bg-slate-400  hover:translate-y-4 duration-150  p-4 rounded-md inset-0 border border-slate-400/5">

            <div class="box--image  w-10 h-10 flex items-center justify-start">  <img src="${imagens}" alt="${name}" class="w-full"> </div>
            <h3 class="text-2xl uppercase font-pokemons font-semibold text-orange-900">${name}</h3>
            <p>Description Pokemons</p>
            <button
              class="more--info px-4 p-2 bg-orange-500 hover:bg-orange-600/95 transition duration-75 text-white rounded-md font-semibold">More
              Info</button>
            <div
              class="info flex justify-center items-center absolute top-0 right-2 cursor-pointer  rounded-full text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>

            </div>
           </figure>
               `;
    console.log(containerApp);
    return global.append(containerApp);
  });
}
