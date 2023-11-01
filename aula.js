function searchPokemon(){
    const pokemonNameOrID = document.getElementById('pokemonInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrID}`;
    fetch(apiUrl)
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('Pokemon not found');
        }
    })
    .then(data => {
        document.getElementById('pokemonName').textContent = `Name : ${data.name}`;
        document.getElementById('pokemonImage').src = data.sprites.front_default;
        document.getElementById('pokemonAbility').textContent = `Ability : ${data.abilities[0].ability.name}`
        document.getElementById('pokemonMove').textContent = `Move : ${data.moves[0].move.name}`
        
    })
    .catch(error => {
        document.getElementById('pokemonName').textContent = 'Pokemon not found.';
        document.getElementById('pokemonImage').src = '';
        document.getElementById('pokemonAbility').textContent = 'Ability not found'
        document.getElementById('pokemonMove').textContent = 'Move not found'
        console.error('Error', error);
    })
    
}
    
