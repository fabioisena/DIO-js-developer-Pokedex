const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');


const maxRecords = 151;
const limit = 10;
let offset = 0;
var limitDetail = '';

function convertPokemonToLi(pokemon) {
    return `
           <li id="${pokemon.number}" class="pokemon ${pokemon.type}">
        
            <script>
                console.log(limitDetail)
            </script>
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <a onclick="limitDetail = ${pokemon.number}; loadPokemonDetail(limitDetail)" data-toggle="modal" data-target="#exampleModal" >

                <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    
                </div>
            </a>        
        </li>
        
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
    
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    
    offset += limit;

    console.log("entrei no btn")
    const qtdRecordsWithNexPage = offset + limit;

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})



