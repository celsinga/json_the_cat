const request = require('request');
const url = ('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2]);
const fetcher = function() {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log(error);
    } else if (data.length === 0) {
      console.log("Breed Not Found");
    } else {
      for (let i in data[0]) {
        if (i === "description") {
          console.log(data[0][i]);
        }
      }
    }
  });
};
fetcher();
