
// a is available only inside scope below
// thus not poluting global space
// and allowing use of it in more objects/functions/...
let (
  a = [1,2,['a','b','c'],4]
) {

  function printA() {
    log('nested for with let');
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        let item = a[i]
        for (let i = 0; i < item.length; i++) {
          log(item[i])
        };
      }
      else {
        log(a[i]);
      }
    };
  }

  function printAvar() {
    log('nested fors with var');
    for (var i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        let item = a[i]
        for (var i = 0; i < item.length; i++) {
          log(item[i])
        };
      }
      else {
        log(a[i]);
      }
    };
  }
}


printA();
printAvar();

try{
  log('accessing "a"');
  log(a);
} catch (e) {
  log('Error ' + e)
}
