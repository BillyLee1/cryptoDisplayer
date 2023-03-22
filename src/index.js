import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import cryptoClass from './api.js';

let handleFormSubmitter = (event) => {
  event.preventDefault();
  const ticker = document.querySelector('#crypto').value.toLowerCase();
  printElements(ticker);

}

let printElements = (ticker) => {
  cryptoClass.cryptoInfo(ticker)
  .then(function(response) {
    console.log(response);
    if (response) {
      document.querySelector(".cryptoName").innerText = `Ticker: ${response.id}`;
      document.querySelector(".cryptoPrice").innerText = `Current Price: $${response.market_data.current_price.usd}`;
      document.querySelector(".cryptoDescription").innerText = response.description.en;
    } else {
      document.querySelector(".cryptoName").innerText = `Ticker: ${ticker} does not exist`;
    }
  })
}

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmitter);
});
