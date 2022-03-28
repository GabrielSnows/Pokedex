const listSelectionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('card__pokemon')

listSelectionPokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    const cardPokemonOpen = document.querySelector('.open')
    cardPokemonOpen.classList.remove('open')

    const idPokemonSelected = pokemon.attributes.id.value

    const idCardPokemonForOpen = 'card__' + idPokemonSelected
    const cardPokemonForOpen = document.getElementById(idCardPokemonForOpen)
    cardPokemonForOpen.classList.add('open')

    const pokemonActiveInList = document.querySelector('.active')
    pokemonActiveInList.classList.remove('active')

    const pokemonSelectedInList = document.getElementById(idPokemonSelected)
    pokemonSelectedInList.classList.add('active')
  })
})
