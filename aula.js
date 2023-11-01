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
        
    })
    .catch(error => {
        document.getElementById('pokemonName').textContent = 'Pokemon not found.';
        document.getElementById('pokemonImage').src = '';
        
        console.error('Error', error);
    });
}
    
