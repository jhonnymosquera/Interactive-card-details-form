const inputName = document.querySelector('#name');
const inputMes = document.querySelector('#mes');
const inputAño = document.querySelector('#año');
const inputCvc = document.querySelector('#cvc');
const inputNumber = document.querySelector('#number');

const invalidName = document.querySelector('.invalidname');
const invalidMes = document.querySelector('.invalidmes');
const invalidAño = document.querySelector('.invalidaño');
const invalidCvc = document.querySelector('.invalidcvc');
const invalidNumber = document.querySelector('.invalidnumber');

const errorDate = document.querySelector('.errorDate');

const cardName = document.querySelector('.name');
const cardMes = document.querySelector('.mes');
const cardAño = document.querySelector('.año');
const cardCvc = document.querySelector('.cvc');
const cardNumber = document.querySelector('.number');

const form = document.querySelector('.form');
const mensaje = document.querySelector('.mensaje');

const datos = {
	name: 'Jane Appleseed',
	mes: '00',
	año: '00',
	cvc: '000',
	number: '0000000000000000',
};

const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => {
	input.addEventListener('input', (i) => {
		datos[i.target.id] = i.target.value;
		card(datos);
		formValidation();
	});
});

function card(datos) {
	let { name, mes, año, cvc, number } = datos;

	number = number.padEnd(16, '0');
	number = `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12, 16)}`;

	cardName.textContent = name;
	cardMes.textContent = mes;
	cardAño.textContent = año;
	cardCvc.textContent = cvc;
	cardNumber.textContent = number;
}

function formValidation() {
	if (inputName.value.length >= 5) {
		inputName.classList.remove('inputError');
		invalidName.style.display = 'none';
	}

	if (inputNumber.value.length === 16) {
		inputNumber.classList.remove('inputError');
		invalidNumber.style.display = 'none';
	}

	if (inputMes.value <= 12) {
		inputMes.classList.remove('inputError');
		errorDate.style.display = 'none';
	}

	if (inputMes.value.length > 0) {
		inputMes.classList.remove('inputError');
		invalidMes.style.display = 'none';
	}

	if (inputAño.value.length > 0) {
		inputAño.classList.remove('inputError');
		invalidAño.style.display = 'none';
	}

	if (inputCvc.value.length > 0) {
		inputCvc.classList.remove('inputError');
		invalidCvc.style.display = 'none';
	}
}

const btn = document.querySelector('.btn-form');
btn.onclick = (e) => {
	e.preventDefault();

	btnValidation();

	if (
		inputNumber.value.length == 16 &&
		inputName.value.length >= 5 &&
		inputMes.value <= 12 &&
		inputAño.value >= 18 &&
		inputAño.value <= 22 &&
		inputMes.value.length === 2 &&
		inputAño.value.length === 2 &&
		inputCvc.value.length === 3
	) {
		form.style.display = 'none';
		mensaje.style.display = 'block';
	}
};

function btnValidation() {
	if (inputName.value.length < 5) {
		inputName.classList.add('inputError');
		invalidName.style.display = 'block';
	}

	if (inputNumber.value.length < 16) {
		inputNumber.classList.add('inputError');
		invalidNumber.style.display = 'block';
	}

	if (inputMes.value > 12) {
		inputMes.classList.add('inputError');
		errorDate.style.display = 'block';
	}

	if (inputAño.value < 18 || inputAño.value > 22) {
		inputAño.classList.add('inputError');
		errorDate.style.display = 'block';
	}

	if (inputMes.value.length === 0) {
		inputMes.classList.add('inputError');
		invalidMes.style.display = 'block';
	}

	if (inputAño.value.length === 0) {
		inputAño.classList.add('inputError');
		invalidAño.style.display = 'block';
	}

	if (inputCvc.value.length === 0 || inputCvc.value.length < 3) {
		inputCvc.classList.add('inputError');
		invalidCvc.style.display = 'block';
	}
}
