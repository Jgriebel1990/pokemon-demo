const button = document.querySelector('button');
const h1 = document.querySelector('h1')

button.addEventListener('click', function(){
    const newColor = makeRandColor();
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}