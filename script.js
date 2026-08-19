const botao = document.getElementById('botao-misterioso');
const foto = document.getElementById('foto');

let nitroAtivado = false;

botao.addEventListener('click', () => {
    nitroAtivado = !nitroAtivado;
    document.body.classList.toggle('dark-mode');

    if (nitroAtivado) {
        foto.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        foto.style.transform = 'rotate(360deg) scale(1.15)';
        botao.innerText = '💨 Botãozinho do N₂O!';
        botao.style.backgroundColor = '#2b8a3e';
    } else {
        foto.style.transform = 'rotate(0deg) scale(1)';
        botao.innerText = 'Droga! é o braia 💨';
        botao.style.backgroundColor = '';
    }
});