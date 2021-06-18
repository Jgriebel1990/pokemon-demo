const container = document.querySelector('#container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 151; i++){
    const pokemon = document.createElement('div');
    const img = document.createElement('img');
    const label = document.createElement('label');
    label.innerText = `${i}.`
    img.src = `${url}${i}.png`
    pokemon.classList.add('pokemon')
    pokemon.append(img)
    pokemon.append(label)
    container.append(pokemon)

}