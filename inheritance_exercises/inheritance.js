
Function.prototype.inherits = function(superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

MovingObject.prototype.woosh = function() {
  console.log("woosh!");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.blowUp = function() {
  console.log("Aerosmith is playing");
};

let s = new Ship();
let a = new Asteroid();

// Function.prototype.inherits = function(superClass) {
//   function Surrogate() {}
//   Surrogate.prototype = superClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
//
// function MovingObject () {}
//
// MovingObject.prototype.woosh = function() {
//   console.log("woosh!");
// };
//
// function Ship () {}
// Ship.inherits(MovingObject);
//
// function Asteroid () {}
// Asteroid.inherits(MovingObject);
//
// Asteroid.prototype.blowUp = function() {
//   console.log("Aerosmith is playing");
// };
//
// let s = new Ship();
