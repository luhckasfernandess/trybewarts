const buttonLogin = document.querySelector('#button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const botaoEnviar = document.querySelector('#submit-btn');
const termosDeUso = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

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

function contador() {
  counter.innerText = textArea.value.length - 501;
  counter.innerText *= -1;
  counter.innerText -= 1;
}

// Último bônus

function vetorCheckBox() {
  const skills = document.querySelectorAll('[class="subject"]:checked');
  const values = [];
  for (let i = 0; i < skills.length; i += 1) {
    values.push(skills[i].value);
  }
  return values;
}

function valoresCheckBox() {
  let string = '';
  for (let i = 0; i < vetorCheckBox().length; i += 1) {
    if (i < vetorCheckBox().length - 1) {
      string = string.concat(`${vetorCheckBox()[i]}, `);
    } else string = string.concat(`${vetorCheckBox()[i]}`);
  }
  return string;
}

function fomulario() {
  const evaluationForm = document.getElementById('evaluation-form');
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email1 = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const checkBoxes = valoresCheckBox();

  evaluationForm.innerHTML = `
    <p>Nome: ${firstName} ${lastName}</p>
    <p>Email: ${email1}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Matérias: ${checkBoxes}</p>
    <p>Avaliação: ${rate}</p>
    <p>Observações: ${textArea.value}</p>
  `;
}

termosDeUso.addEventListener('click', ativaObotao);

buttonLogin.addEventListener('click', validation);

textArea.addEventListener('keyup', contador);

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault();

  fomulario();
});
