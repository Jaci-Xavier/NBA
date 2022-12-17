let fullCourt = document.getElementById('full-court');
let hitsMistakes = document.getElementById('hits-mistakes');
let clearBtn = document.getElementById('clear-btn');
// console.log(fullCourt);

let selectedColor;
let shot;

hitsMistakes.addEventListener('click', (event) => {
    if (event.target.innerText === 'ACERTOS') {
        selectedColor = 'green';
        shot = 'Acertou';
    }
    if (event.target.innerText === 'ERROS') {
        selectedColor = 'red';
        shot = 'Errou';
    }
})
