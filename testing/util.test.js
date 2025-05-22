const { add, throwAnError, fetchData, fetchDataPromise } = require("./util");
// import {add} from "./util"

// basic matchers
test("should return 2", () => {
  expect(add(1, 1)).toBe(2);
});

test("should throw an error", () => {
  expect(() => {
    throwAnError();
  }).toThrow();
});

// testing async callback code simulating with setTimeout()
test("async code should return fetched data message", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Data is Fetched after 1000 ms");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

// Unit Testing foe promise based function
test("async code promise should return fetch data promise message", () => {
  expect(fetchDataPromise()).resolves.toBe(
    "Data is Fetch with promise after 10000 ms"
  );

});

test("async code promise should return fetch data promise message", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("Data is Fetch with promise after 10000 ms");
});
