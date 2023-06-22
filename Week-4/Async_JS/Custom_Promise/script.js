class CustomPromise {
  // constructor function to initialize state and value properties
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // resolve function to convert promises's state from "pending" to "fulfilled"
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    // reject function to convert promises's state from "pending" to "rejected"
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(this.value));
      }
    };

    // exceuting the executor function within a try-catch block
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  //   "then" method --> used to register success and failure callback functions that get called when the promise is fulfilled or rejected
  thenu(onFulfilled, onRejected) {
    // create a new instance of CustomPromise class
    return new CustomPromise((resolve, reject) => {
      const onFulfilledCallback = (value) => {
        try {
          // if onFulfilled is truthy, then onFulfilled is invoked with the value and the returned value from the callback is then passed to the resolve function

          //   if it is falsy, then resolve is called using the intial value
          resolve(onFulfilled ? onFulfilled(value) : value);
        } catch (error) {
          reject(error);
        }
      };

      const onRejectedCallback = (reason) => {
        try {
          // if onRejected is truthy, then onRejected is invoked with the reason and the returned reason from the callback is then passed to the reject function

          //   if it is falsy, then reject is called using the intial reason
          reject(onRejected ? onRejected(reason) : reason);
        } catch (error) {
          reject(error);
        }
      };

      //   depending on the status of the promise, respective callback functions are called with value/reason
      if (this.state === "fulfilled") {
        setTimeout(() => {
          onFulfilledCallback(this.value);
        }, 0);
      } else if (this.state === "rejected") {
        setTimeout(() => {
          onRejectedCallback(this.value);
        }, 0);
      } else if (this.state === "pending") {
        this.onFulfilledCallbacks.push(onFulfilledCallback);
        this.onRejectedCallbacks.push(onRejectedCallback);
      }
    });
  }

  //   handling promise rejections
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  //   returns a new CustomPromise instance that is immediately resolved
  static resolve(value) {
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }

  //   returns a new CustomPromise instance that is immediately rejected
  static reject(reason) {
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
}
