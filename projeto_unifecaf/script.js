const btnLogin = document.querySelector('.btn-login');
const btnCadastro = document.querySelector('.btn-cadastro');

if (btnLogin){
    btnLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}
if (btnCadastro){
    btnCadastro.addEventListener('click', () => {
        window.location.href = 'cadastro.html';
    });
}