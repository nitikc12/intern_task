// Demonstrate "callback hell" by writing a series of nested callbacks. Each callback should perform a task that simulates an asynchronous operation and passes control to the next callback.
// Callback with Error Handling

function getData(dataId, game) {
  setTimeout(() => {
    if (game) {
      game();
    }
    console.log("data", dataId);
  }, 2000);
}

// // callback hell : nested callback stacked below one another like this
getData(1, () => {
  console.log("data 1 is running");
  //to execute our callback
  getData(2, () => {
    console.log("data 2 is running");
    getData(3, () => {
      console.log("data 3 is running");
      getData(4, () => {
        console.log("data 3 is running");
      });
    });
  });
});

// Write a function that performs an asynchronous operation using a callback. Inside the callback of the first operation, perform a second asynchronous operation and use another callback for that. Ensure proper chaining.
// Callback Hell

function asyncOperation(dataId, callback) {
  setTimeout(() => {
    callback(`Result from operation with dataId ${dataId}`);
    console.log("Async Operation  completed with dataId:", dataId);
  }, 1000);
}

asyncOperation(1, (result1) => {
  console.log(result1);

  asyncOperation(2, (result2) => {
    console.log(result2);

    asyncOperation(3, (result3) => {
      console.log(result3);

      asyncOperation(4, (result4) => {
        console.log(result4);
      });
    });
  });
});
//
function Ptask(data1, Success, Failure) {
  setTimeout(() => {
    const yesSuccess = Math.random() > 0.5;
    if (yesSuccess) {
      Success(`success with data: ${data1}`);
    } else {
      Failure(`failure with data: ${data1}`);
    }
  }, 1000);
}

Ptask(
  "Data",
  (result1) => {
    console.log(result1);
  },
  (error1) => {
    console.error(error1); // Handle failure
  }
);

function processTask(data, onSuccess, onFailure) {
  setTimeout(() => {
    // a success or failure
    const isSuccess = Math.random() > 0.5; // 50% chance of success

    if (isSuccess) {
      onSuccess(`Success with data: ${data}`);
    } else {
      onFailure(`Failure with data: ${data}`);
    }
  }, 1000);
}

processTask(
  "Data",
  (result) => {
    console.log(result); // Handle success
  },
  (error) => {
    console.error(error); // Handle failure
  }
);

function Calculation(a, b, call, back) {
  const result = a + b + call;
  back.forEach((callback) => callback(result));
}

function callback1(result) {
  console.log("Callback 1 received result:", result);
}

function callback2(result) {
  console.log("Callback 2 received result:", result);
}
Calculation(5, 4, 3, [callback1, callback2]);

function callback3(result) {
  console.log("callback 3 received resulr:", result);
}
Calculation(3, 4, (5)[(callback2, callback3)]);

let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  //   resolve(123);
  reject("some error");
});

// Create a Promise that resolves with a string "Hello, World!" after 2 seconds.
// Promise Chaining

function getData1(dataId1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId1);
      resolve("success");
    }, 2000);
  });
}
console.log("hello world 1");
getData1(1)
  .then((res) => {
    console.log("hello world 2");
    return getData1(2);
  })
  .then((res) => {
    console.log(res);
  });
//   Write a function that returns a Promise which resolves with a number after 1 second. Chain two .then()methods to add 5 and then multiply the result by 2.
// Promise.all
function getData2(dataId2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("data", dataId2);
      resolve(10);
    }, 2000);
  });
}
getData2(10)
  .then((res) => {
    return res + 5;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  });

//   Given two Promises: one that resolves with an array [1, 2, 3] and another that resolves with a string "Hello", use Promise.all to wait for both Promises to resolve and log the combined result.
// Promise Handling with .catch()

const promise1 = new Promise((resolve, reject) => {
  resolve([2, 3, 4]);
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Hello");
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});

promise1.catch((error) => {
  console.error(error);
});
promise2.catch((error) => {
  console.error(error);
});

// Create a Promise that rejects with an error message "Something went wrong" after 3 seconds. Handle the rejection using .catch() and log the error message.
// Promise Race

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 5000);
});
let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("something went wrong"));
  }, 3000);
});

Promise.race([promise4, promise5])
  .then((value) => {
    console.log(value);
  })

  .catch((error) => {
    console.error("Something went wrong", error);
  });

//

// Write a function that returns a Promise that resolves or rejects based on which of the two provided Promises settles first. The first Promise resolves in 2 seconds, and the second one resolves in 1 second. Use Promise.race() to determine which one settles first.

function racePromises() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FIRST");
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SECOND");
    }, 5000);
  });

  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
  });
}
racePromises();

// Rewrite the following Promise-based code using async/await:
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function fetchData() {
  const data = await getData();

  console.log(data);
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

fetchData();

// ///

const USER_API_URL = "https://jsonplaceholder.typicode.com/users/";
const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchUserAndPosts(userId) {
  try {
    // Fetch user data
    const userResponse = await fetch(`${USER_API_URL}${userId}`);
    if (!userResponse.ok) throw new Error("Failed to fetch user data");
    const userData = await userResponse.json();

    // Fetch posts data
    const postsResponse = await fetch(`${POSTS_API_URL}?userId=${userId}`);
    if (!postsResponse.ok) throw new Error("Failed to fetch posts data");
    const postsData = await postsResponse.json();

    console.log({ user: userData, posts: postsData });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserAndPosts(1);

async function NetworkRequest() {
  try {
    let a = await new Promise((resolve) => setTimeout(resolve, 1000));

    if (Math.random() < 0.5) {
      throw new Error("Network request failed");
    }

    console.log("Network request succeeded");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

NetworkRequest();

// // Create an async function that performs an asynchronous calculation and returns the result. Use this function to get a value and log it to the console.

async function Calculation(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = value * 2;
      resolve(result);
    }, 3000);
  });
}

async function getData2() {
  try {
    const result = await Calculation(5);
    console.log(`The result of the calculation is: ${result}`);
  } catch (error) {
    console.error("an error occured", error);
  }
}
getData2();

// // Write an async function that executes three asynchronous tasks in parallel using await. Each task should resolve after a random delay. Log the results in the order they complete.
// // Returning Values from async/await

function asyncTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} completed after ${delay} `);
    }, delay);
  });
}
async function Tasks() {
  const task1 = asyncTask("Task1", 3000);
  const task2 = asyncTask("Task2", 1000);
  const task3 = asyncTask("Task3", 2000);

  const program = [task1, task2, task3];

  while (program.length > 0) {
    const result = await Promise.race(program);

    console.log(result);

    program.splice(program.indexOf(result), 1);
  }
}

Tasks();
