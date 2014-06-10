  // default parameters
  function defaultParams(a,b = 'b', c = 'c') {
    log("a == " + a);
    log("b == " + b);
    log("c == " + c);
  }

  // default parameters and rest parameters
  function restParams(a, b = 10, ...params) {
    log('a == ' + a);
    log('b == ' + b);
    log("params.length == " + params.length);
    for(let a of params) {
      log(a);
    }
  }

  // implementation of previous function using old JS
  function withArguments(a,b) {
    if (b === undefined) {
      b = 10;
    }

    var params = Array.prototype.slice.call(arguments, 2);

    log('a == ' + a);
    log('b == ' + b);
    log("params.length == " + params.length);
    for(let a of params) {
      log(a);
    }
  }


  log('defaultParams(1)');
  defaultParams(1);

  log('defaultParams(3, 2)');
  defaultParams(3,2);

  log('defaultParams(3, 2, 1)');
  defaultParams(3, 2, 1);

  log('');
  log('restParams()');
  restParams();

  log('');
  log('restParams(1,2,3,4)');
  restParams(1,2,3,4);

  log('');
  log('withArguments(1,2,3,4)');
  withArguments(1,2,3,4);

  log('');
  log('defaultParams(...[1,2,3])');
  defaultParams(...[1,2,3]);

  log('defaultParams.apply(null,[1,2,3])');
  defaultParams.apply(null, [1,2,3]);
