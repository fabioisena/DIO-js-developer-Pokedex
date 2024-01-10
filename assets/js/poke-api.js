
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    const abilities = pokeDetail.abilities.map((testeee) => testeee.ability.name)
    const [abilit] = abilities
    const stats = pokeDetail.stats.map((testeee) => testeee.stats)

    pokemon.abilities = abilities
    pokemon.stats = stats
    pokemon.types = types
    pokemon.type = type
    pokemon.height = pokeDetail.height
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.weight = pokeDetail.weight
    

    
    const tipo = pokeDetail.types[0].type.name

    pokemon.tipo = tipo  
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
