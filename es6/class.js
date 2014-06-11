
class Animal {
  fetch(stick) {
    log(stick);
  }

  makeSound() {
    log('making sound');
  }
};

class Dog extends Animal {

  makeSound() {
    super();
    log('bark!');
  }
};

class Cat extends Animal {
  makeSound() {
    super();
    log('meow!');
  }
};


var dog = new Dog();
var cat = new Cat();

log('dog.fetch("stick")');
dog.fetch('stick');
log('dog.makeSound()');
dog.makeSound();

log('cat.fetch("stick")');
cat.fetch('stick');
log('cat.makeSound()');
cat.makeSound();
