import printElements from './index.js';


function cryptoInfo(ticker) {
 let request = new XMLHttpRequest();
 const url = `https://api.coingecko.com/api/v3/coins/${ticker}`;

 request.addEventListener("loadend", function() {
  const response = JSON.parse(this.responseText);
  if (this.status === 200) {
    console.log(response);
    printElements(response);
    
  // } else {
  //  handleError(this.statusText);
  }
 });

 request.open("GET", url, true);
 request.send();
}

// function handleResponse(response) {
//  console.log(response);
// }

// function handleError() {
//  console.log("request failed");
// }
export default cryptoInfo;
