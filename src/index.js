import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import cryptoClass from './api.js';
import cryptoAbb from './abb.js';


let handleFormSubmitter = (event) => {
  event.preventDefault();
  const ticker = document.querySelector('#crypto').value.toLowerCase();
  printElements(ticker);
  parseAbb(ticker);
  
}

let parseAbb = (ticker) => {
  cryptoAbb.cryptoSearch()
  .then(function(response) {
    for (let i = 0; i < response.length; i++ ) {
      if (response[i].symbol === ticker) {
        console.log(ticker + "we found it");
        printElements(response[i].id);
        break;
      }
    }
  }) 
}

let printElements = (ticker) => {
  cryptoClass.cryptoInfo(ticker)
  .then(function(response) {
    console.log(response);
    if (response) {
      document.querySelector(".cryptoName").innerText = `Ticker: ${response.id}`;
      document.querySelector(".cryptoPrice").innerText = `Current Price: $${response.market_data.current_price.usd}`;
      document.querySelector(".cryptoDescription").innerHTML = response.description.en;
    } else {
      document.querySelector(".cryptoName").innerText = `Ticker: ${ticker} does not exist`;
    }
  })
}

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmitter);
});
