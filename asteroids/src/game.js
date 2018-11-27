const Asteroid = require("./asteroid.js");

function Game() {
  this.DIM_X = 800;
  this.DIM_Y = 400;
  this.NUM_ASTEROIDS = 5;
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  this.asteroids = [];
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {

    let asteroid = new Asteroid({pos: this.randomPosition()});
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function() {
  let xPos = Math.floor(Math.random()* this.DIM_X);
  let yPos = Math.floor(Math.random()* this.DIM_Y);
  return [xPos, yPos];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  for(let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for(let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

module.exports = Game;
