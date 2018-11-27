const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(options) {
  this.COLOR = "#5f4e43";
  this.RADIUS = 10;

  options = Object.assign(options, {color: this.COLOR,
                            radius: this.RADIUS,
                            vel: Util.randomVec(1)
                          });

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
