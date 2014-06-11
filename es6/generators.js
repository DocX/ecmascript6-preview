
// generators - simple way to make iterators

var fibonacci = {
  "@@iterator": function*() {
    yield 'first';
    yield 'second';

    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 10)
    break;
  log(n);
}