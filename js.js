const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
let exchangeRates = {}; 

const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");

function populateCurrencyOptions(currencies) {
  currencies.forEach(currency => {
    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.textContent = currency;
    fromCurrencySelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.textContent = currency;
    toCurrencySelect.appendChild(optionTo);
  });
}


async function fetchExchangeRates() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    exchangeRates = data.rates;
    const currencies = Object.keys(exchangeRates); 
    populateCurrencyOptions(currencies);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    alert("Failed to fetch exchange rates. Please try again later.");
  }
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];

 
  const convertedAmount = (amount * toRate) / fromRate;


  document.getElementById("convertedValue").textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
}


document.getElementById("convertBtn").addEventListener("click", convertCurrency);

fetchExchangeRates();
