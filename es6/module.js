// importing module

// module log_fns from 'module_fns';
// log_fns.logA()
// log_fns.logB()



// importing specific functions

import {logA} from 'module_fns';

logA();
try {
logB();
} catch(e) {
  log('Exception ' + e)
}
