
// just want  do log(x) for each x

log('[1,2,3,4].forEach(function(x) { return log(x)) }');
[1,2,3,4].forEach(function(x) { return log(x) });




// ARROWS!

log('[1,2,3,4].forEach(x => log(x))');
[1,2,3,4].forEach(x => {
  log(x);
  log("another " + x)
});




// what if care about "this":

var o = {
  value: 123,


  delayFn: function() {
    setTimeout(function() {
      log(this.value);
    }, 11)
  },

  delayFnBind: function() {
    setTimeout(function() {
      log(this.value);
    }.bind(this), 11)
  },

  delayAr: function() {
    setTimeout(() => log(this.value), 11);
  }
}


log('o.delayFn');
o.delayFn();

log('o.delayFnBind');
o.delayFnBind();


log('o.delayAr');
o.delayAr();
