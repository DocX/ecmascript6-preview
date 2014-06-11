
  // function that takes 1 or more params
  // when if no second param passed should be 10

  function defaultParamsAndArguments(a,b) {
    b = b || 10;

    var params = Array.prototype.slice.call(arguments, 2);

    log('a == ' + a);
    log('b == ' + b);
    log("params.length == " + params.length);
    for(let a of params) {
      log(a);
    }
  }


  log('');
  log('defaultParamsAndArguments(1)');
  defaultParamsAndArguments(1);

  log('');
  log('defaultParamsAndArguments(1,2,3,4)');
  defaultParamsAndArguments(1,2,3,4);