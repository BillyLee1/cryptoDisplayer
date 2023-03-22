export default class cryptoAbb {
  static cryptoSearch() {
    return fetch (`https://api.coingecko.com/api/v3/coins/`)
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
