async function getExchangeRate(currencyCode) {
  // try catch block to handle erros/exceptions
  try {
    // fetch data from an API
    const fetchApi = await fetch("https://api.exchangerate.host/latest");
    // convert data from json format to usable object
    const data = await fetchApi.json();
    if (currencyCode in data.rates) {
      console.log(data.rates[currencyCode].toFixed(4));
    } else {
      console.log(null);
    }
  } catch (e) {
    // logs any error that occurs during the excecution
    console.log(`Error - ${e}`);
  }
}

// function call
getExchangeRate("ARS");
