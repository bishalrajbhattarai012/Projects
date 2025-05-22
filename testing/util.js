module.exports.add = (a, b) => a + b;

module.exports.throwAnError = () => {
  throw new Error("Dummy Error");
};

function fetchData(callback) {
  setTimeout(() => {
    callback("Data is Fetched after 1000 ms");
  }, 1000);
}

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data is Fetch with promise after 10000 ms");
    });
  });   
}

module.exports.fetchData = fetchData;
exports.fetchDataPromise = fetchDataPromise
