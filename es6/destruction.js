
// just want to return more values

function somePowers(a) {
  return [a * a, a * a * a];
}


let [square, cube] = somePowers(10);

log("square == " + square);
log("cube == " + cube);


// what about even more values

function values() {
  return [1,2,3,4,5,6];
}

let [first,,third] = values();
log("first == " + first);
log("third == " + third);