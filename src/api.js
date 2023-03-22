export default class cryptoClass {
  static cryptoInfo(ticker) {
    return fetch(`https://api.coingecko.com/api/v3/coins/${ticker}`)
    .then(function(response) {
      if (!response) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    })
  }
}
