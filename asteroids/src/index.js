const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(event) {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    // let s = new MovingObject({pos: [100, 100], vel: [0, 0], radius: 20, color: "#00ff00"});
    // s.draw(ctx);
    let a = new Asteroid({pos: [30, 30]});
    a.draw(ctx);
    debugger
  });
