let balance = 0;
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');
const addTransactionButton = document.getElementById('add-transaction');

function updateBalance() {
  balanceDisplay.textContent = `₹${balance.toFixed(2)}`;
}

function addTransaction(description, amount) {
  const li = document.createElement('li');
  li.classList.add(amount > 0 ? 'income' : 'expense');
  li.innerHTML = `
    ${description}
    <span>${amount > 0 ? '+' : ''}₹${amount.toFixed(2)}</span>
  `;

  transactionList.appendChild(li);
}

addTransactionButton.addEventListener('click', () => {
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description && !isNaN(amount)) {
    balance += amount;
    updateBalance();
    addTransaction(description, amount);
    descriptionInput.value = '';
    amountInput.value = '';
  } else {
    alert('Please enter a valid description and amount.');
  }
});

updateBalance();
