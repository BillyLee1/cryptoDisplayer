import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import cryptoInfo from './api.js';

let handleFormSubmitter = (event) => {
  event.preventDefault();
  const ticker = document.querySelector('#crypto').value;
  cryptoInfo(ticker);
}

let printElements = (apiResponse) => {
  document.querySelector("cryptoName").innerText = `Ticker: ${apiResponse.id}`;
  document.querySelector("cryptoPrice").innerText = `Current Price: $${apiResponse.market_data.current_price.usd}`;
  document.querySelector("cryptoDescription").innerText = apiResponse.description.en;

}

window.addEventListener("load", () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmitter);
});

export default printElements;
