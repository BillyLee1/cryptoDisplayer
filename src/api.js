export default function cryptoInfo(ticker) {
 let request = new XMLHttpRequest();
 const url = `https://api.coingecko.com/api/v3/coins/${ticker}`;

 request.addEventListener("load", function() {
  if (this.status === 200) {
   const response = JSON.parse(this.responseText);
  //  handleResponse(response);
  // } else {
  //  handleError(this.statusText);
  }
 });

 request.open("GET",  url, true);
 request.send();
}

// function handleResponse(response) {
 
}
