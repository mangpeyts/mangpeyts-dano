function inputEvent(event) {
  if(event.key === 'Enter') {
    enterPinNumber();
  }
}

function enterPinNumber() {
  const inputPin = document.querySelector('.js-input-pin').value;
  if (inputPin === '081202') {
    window.location.href = '../after-pin/after-pin.html'; // Adjust the path as needed
  } else {
    document.querySelector('.js-invalid-message').innerHTML = 'Invalid PIN. Try again!';
  }
}

function optionButtons(option) {
  if (option === 'check') {
    window.location.href = '../check/check.html'; // Adjust the path as needed
  } else if (option === 'withdraw') {
    window.location.href = '../withdraw/withdraw.html'; // Example path
  } else if (option === 'deposit') {
    window.location.href = '../deposit/deposit.html'; // Example path
  } else if (option === 'exit') {
    window.location.href = '../exit/exit.html'; // Example path
  }
}

function inputAmount(event) {
  if(event.key === 'Enter') {
    enterAmount();
  }
}
const amountSaved = JSON.parse(localStorage.getItem('balance')) || 0;
document.querySelector('.js-balance').innerHTML = `₱${amountSaved}`;

function enterAmount() {
  let inputAmount = document.querySelector('.js-input-amount').value;
  inputAmount = Number(inputAmount);

  // Check for invalid input (not a number or less than/equal to 0)
  if (isNaN(inputAmount) || inputAmount <= 0) {
    document.querySelector('.js-error').innerHTML = 'Invalid Amount. Please try again!';
    document.querySelector('.js-correct').innerHTML = '';
    return; // Stop execution if the input is invalid
  }

  // Check if the withdrawal amount is greater than the balance
  if (inputAmount <= 0) {
    document.querySelector('.js-error').innerHTML = 'Insufficient balance!';
    document.querySelector('.js-correct').innerHTML = '';
    return; // Stop execution if the balance is insufficient
  }

  // Perform the withdrawal by subtracting the amount
  const newBalance = amountSaved + inputAmount;

  // Update the balance display and localStorage
  document.querySelector('.js-correct').innerHTML = `You withdrew ₱${inputAmount}.`;
  document.querySelector('.js-error').innerHTML = '';
  document.querySelector('.js-balance').innerHTML = `₱${newBalance}`;
  localStorage.setItem('balance', newBalance);
}



function inputDeposit(event) {
  if(event.key === 'Enter') {
    enterAmountToDeposit();
  }
}

function enterAmountToDeposit() {
  let inputAmount = document.querySelector('.js-input-deposit').value;
  inputAmount = Number(inputAmount);

  // Get the current saved balance from localStorage
  let amountSaved = Number(localStorage.getItem('balance')) || 0;

  // Check for invalid deposit amounts (NaN or <= 0)
  if (isNaN(inputAmount) || inputAmount <= 0) {
    document.querySelector('.js-errorDep').innerHTML = 'Invalid Amount. Please try again!';
    document.querySelector('.js-correctDep').innerHTML = '';
    return;
  }

  // Check if the deposit amount is bigger than the current balance
  if (inputAmount > amountSaved) {
    document.querySelector('.js-errorDep').innerHTML = 'Invalid Amount. Deposit exceeds balance!';
    document.querySelector('.js-correctDep').innerHTML = '';
    return;
  }

  // Update balance (for deposit, add the input amount to saved balance)
  let newBalance = amountSaved - inputAmount;

  // Display success message
  document.querySelector('.js-correctDep').innerHTML = `You deposited ₱${inputAmount}.`;
  document.querySelector('.js-errorDep').innerHTML = '';
  document.querySelector('.js-balance').innerHTML = `₱${newBalance}`;

  // Save the new balance to localStorage
  localStorage.setItem('balance', newBalance);
}
