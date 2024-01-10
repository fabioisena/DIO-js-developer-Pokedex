
let element, charact = [];
let tipo = '';
const pokemonDetailList = document.getElementById('pokemonDetailList');

function convertPokemonToDetail(pokemon) {
    return` 
        <div id="detalhe" class="${tipo}">
        <span class="number-detail">#${pokemon.id}</span>
            <div class="circle">
                <div id="pokemon-background" class="pokemon-imagem">
                    <div class="type ${tipo}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${limitDetail}.svg"
                        alt="">
                    </div>
                </div>
            </div>
            
                      
            <div class="infos">
            
                <div id="demo" class="modal-header">
                    <h3 class="modal-title">${pokemon.name}</h3>
                </div>
                <br>

                <div class="more-detail">
 

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Base Stats</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">About</a>
                        
                    </div>
                </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table class="table-content">
                                <tbody>
                                    <tr>
                                        <td class="title_abilities">HP</td>
                                        <td colspan="3">
                                        <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: ${charact[0]}%" aria-valuenow=${charact[0]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="title_abilities">Attack</td>
                                        <td colspan="3">
                                        <div class="progress ">
                                                <div class="progress-bar bg-danger" role="progressbar" style="width: ${charact[1]}%" aria-valuenow=${charact[4]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Defense</td>
                                        <td colspan="3">
                                        <div class="progress">
                                                <div class="progress-bar bg-secondary" role="progressbar" style="width: ${charact[2]}%" aria-valuenow=${charact[4]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sp. Atk</td>
                                        <td colspan="3">
                                            <div class="progress">
                                                <div class="progress-bar bg-primary" role="progressbar" style="width: ${charact[3]}%" aria-valuenow=${charact[4]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sp. Def</td>
                                        <td colspan="3">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: ${charact[4]}%" aria-valuenow=${charact[4]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Speed</td>
                                        <td colspan="3">
                                            <div class="progress">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: ${charact[5]}%" aria-valuenow=${charact[4]} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                        
                                        </tr>    
                                </tbody>
                            </table>
                        
                        
        
                        </div>

                        

                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <table class="table-content">
                        <tbody>
                            <!-- About section -->
                            <tr>
                                <td>Height</td>
                                <td colspan="3">${pokemon.height}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td colspan="3">${pokemon.weight}</td>
                            </tr>
                            <tr>
                                <td>Abilities: </td>
                                <td colspan="3">${element}</td>
                            </tr>  

                               
                        </tbody>
                    </table>
                            

                    </div>

                                        
                </div>               
            </div>
                    
        </div>       
    
        `
}

convertPokemonToDetail(limitDetail)


loadPokemonDetail = (limitDetail) => {

            const url2 = `https://pokeapi.co/api/v2/pokemon/${limitDetail}`
            return fetch(url2)
            
                .then((response2) => response2.json())
                .then((jsonBody2) => jsonBody2)
                .then((pokemon) => {

                    const abilidades = pokemon.abilities;
                    const stats = pokemon.stats;

                    element = [];
                    charact = [];
                    if (typeof abilidades != 'undefined'){
                        for (let i = 0; i < abilidades.length; i++) {
                            element.push(abilidades[i].ability.name)                        
                        }
                        element = element.join(' | ');

                        for (let i = 0; i < stats.length; i++) {
                            charact.push(stats[i].base_stat)                        
                        }

                        tipo = pokemon.types[0].type.name;            
                    }

                    const newHtml = convertPokemonToDetail(pokemon)

                    if (limitDetail !== "") {
                        pokemonDetailList.innerHTML = newHtml;
                        }                
                  
                })
        
}                

loadPokemonDetail(limitDetail)