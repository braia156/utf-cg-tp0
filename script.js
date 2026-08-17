const botao = document.getElementById('botao-misterioso');
const foto = document.getElementById('foto');

let modoDrift = false;

botao.addEventListener('click', () => {
    modoDrift = !modoDrift;

    if (modoDrift) {
        // Aplica rotação e escala na foto
        foto.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        foto.style.transform = 'rotate(360deg) scale(1.1)';
        
        // Altera o estilo e texto do botão
        botao.innerText = '🏎️ Droga! é o braia';
        botao.style.backgroundColor = '#2b8a3e';
    } else {
        // Retorna a foto ao estado original
        foto.style.transform = 'rotate(0deg) scale(1)';
        
        // Restaura o botão
        botao.innerText = 'Clique aqui';
        botao.style.backgroundColor = '';
    }
});