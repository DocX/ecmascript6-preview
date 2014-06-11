

  // function that takes 1 or more params
  // when if no second param passed should be 10

  function restParams(a, b = 10, ...params) {
    log('a == ' + a);
    log('b == ' + b);
    log("params.length == " + params.length);
    for(let a of params) {
      log(a);
    }
  }


  // function in default params
  // is run on call time

  function paramFunction(time = new Date()) {
    log("time == " + time);
  }




  log('');
  log('restParams()');
  restParams();

  log('');
  log('restParams(1,2,3,4)');
  restParams(1,2,3,4);


  log('');
  log(new Date());

  window.setTimeout(() => {log('paramFunction()'); paramFunction();}, 1000);

