let fibonacci = {
  "@@iterator": function() {
    let pre = 0, cur = 1;
    return {
      next: function() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

log('iterator way');
var iterator = fibonacci['@@iterator']();
for(var i = iterator.next();!i.done; i = iterator.next()){
  var n = i.value;
  if (n > 10)
    break;
  log(n);

}





log('');
log('of keyword');
// "of" keyword:
// calls @@iterator functions and
// every iteration checks for 'done' value
// and pass 'value' to iterator variable

for (var n of fibonacci) {
  if (n > 10)
    break;
  log(n);
}
