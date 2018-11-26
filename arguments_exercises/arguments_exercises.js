function sum() {
  let nums = Array.from(arguments);
  let numSum = 0;

  for(let i= 0; i < nums.length; i++) {
    numSum += nums[i];
  }

  return numSum;
}

function sum2(...args) {
  let numSum = 0;
  let nums = args;
  for(let i= 0; i < nums.length; i++) {
    numSum += nums[i];
  }

  return numSum;
}

Function.prototype.myBind = function(context) {
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;

  return function () {
    let applyArgs = Array.from(arguments);
    debugger;
    return that.apply(context, bindArgs.concat(applyArgs));
  };
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...applyArgs) => {
    return this.apply(context, bindArgs.concat(applyArgs));
  };
};

// example for myBind
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

const curriedSum = function(numArgs) {
  let numbers = [];

  const _curriedSum = (num) => {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce((total, next) => total + next);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

Function.prototype.curry = function(numArgs) {
  let args = [];

  const func = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(func, args);
    } else {
      return func;
    }
  };

  return func;
};

function sum(a, b) {
    return a + b;
}
