document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-btn');
    const secretMessage = document.getElementById('secret-message');

    revealButton.addEventListener('click', () => {
        secretMessage.classList.toggle('hidden');

        if (secretMessage.classList.contains('hidden')) {
            revealButton.textContent = 'Clique para saber mais';
        } else {
            revealButton.textContent = 'Esconder mensagem';
        }
    });
});