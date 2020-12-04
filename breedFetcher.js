const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  const url = ('https://api.thecatapi.com/v1/breeds/search?q=' + breedName);
  const fetcher = function() {
  request(url, (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      console.log(err);
      callback(err);
    } else if (data.length === 0) {
      console.log("Breed Not Found");
      callback(null);
    } else {
      for (let i in data[0]) {
        if (i === "description") {
          console.log(data[0][i]);
          callback(null);
        }
      }
    }
  });
};
fetcher();
};

module.exports = fetchBreedDescription;