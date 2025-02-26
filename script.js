const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const valueElement = document.getElementById('value');
const colorPicker = document.getElementById('colorPicker');
const numberInput = document.getElementById('numberInput');
const sendButton = document.getElementById('sendButton');

let value = parseInt(valueElement.textContent);


minusButton.addEventListener('click', () => {
    value--;
    valueElement.textContent = value;
    minusButton.style.backgroundColor = 'red';
    setTimeout(() => minusButton.style.backgroundColor = '#555', 200);
});

plusButton.addEventListener('click', () => {
    value++;
    valueElement.textContent = value;
    plusButton.style.backgroundColor = 'green';
    setTimeout(() => plusButton.style.backgroundColor = '#555', 200);
});


colorPicker.addEventListener('input', (event) => {
    valueElement.style.color = event.target.value;
});


sendButton.addEventListener('click', () => {
    const inputValue = parseInt(numberInput.value);
    if (!isNaN(inputValue)) {
        value = inputValue;
        valueElement.textContent = value;
    }
});