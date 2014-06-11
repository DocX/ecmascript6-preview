// Base class

var Animal = function() { }
Animal.prototype.fetch = function(stick) {
  log(stick);
}
Animal.prototype.makeSound = function() {
  log('making sound:');
}

// Dog class extending from Animal
var Dog = function(){};
Dog.prototype = new Animal;

Dog.prototype.makeSound = function() {

  // calling superclass's function
  // hardcoded name!

  Animal.prototype.makeSound.call(this);
  log('bark!');
}


var dog = new Dog();
log("dog.fetch('stick')");
dog.fetch('stick')
log("dog.makeSound()");
dog.makeSound()