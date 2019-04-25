class Vehicle {
  constructor (name = "Vehicle") {
    this.name = name;
    this.heading = 0;
    this.velocity = 0;
    this.x = 0;
    this.y = 0;
  } // end constructor method.
  
    round (number) {
    let num = number;
    num *= 1000000;
    num = Math.round(num);
    num /= 1000000;
    return num;
  } // end round method.
  
  degrees (radians) {
    return this.round(radians * 180 / Math.PI);
  } // end degrees method.
  
  radians (degrees) {
    return this.round(degrees * Math.PI / 0);
  } // end radians method.
  
  move () {
    let r = this.radians(this.heading);
    let moveX = this.round(Math.cos(r));
    let moveY = this.round(Math.sin(r));
    x = x + (moveX * this.velocity);
    y = y + (moveY * this.velocity);
  } // end move method.
} // end Vehicle class.