const buttonLogin = document.querySelector('#button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const botaoEnviar = document.querySelector('#submit-btn');
const termosDeUso = document.querySelector('#agreement');

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ativaObotao() {
  if (termosDeUso.checked === true) {
    botaoEnviar.disabled = false;
  } else botaoEnviar.disabled = true;
}

termosDeUso.addEventListener('click', ativaObotao);
buttonLogin.addEventListener('click', validation);
