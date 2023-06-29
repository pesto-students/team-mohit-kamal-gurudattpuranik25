const temperatureData = {
  NewYork: 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const getTemperatureForCity = (city) => {
  let cache = {};

  // closure
  const getTempData = () => {
    if (city in cache) {
      return cache[city];
    } else {
      cache[city] = temperatureData[city];
      return cache[city];
    }
  };

  return getTempData;
};

const temperature1 = getTemperatureForCity("London");
console.log(temperature1()); // retrieved from object

const temperature2 = getTemperatureForCity("London");
console.log(temperature1()); //retrieved from cache
