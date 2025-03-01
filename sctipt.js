const inputNumber = document.getElementById('number');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const result = document.querySelector('.result');



function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;


    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


submitButton.addEventListener('click', function() {
    const value = inputNumber.value.trim();
    const number = parseInt(value);
    
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number';
        return;
    }

    if (isPrime(number)) {
        result.textContent = `${number} is a prime number!`;
    } else {
        result.textContent = `${number} is not a prime number.`;
    }
});

clearButton.addEventListener('click', function() {
    inputNumber.value = '';
    result.textContent = 'result';
});

