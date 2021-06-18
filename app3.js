const container = document.querySelector('#container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i = 1; i <= 151; i++){
    const pokemonDiv = document.createElement('div');
    const img = document.createElement('img');
    const label = document.createElement('label');
    img.src = `${url}${i}.png`;
    label.innerText = `${i}.`
    pokemonDiv.append(img);
    pokemonDiv.append(label);
    container.append(pokemonDiv);

    pokemonDiv.classList.add('pokemon')
}