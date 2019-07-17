/* src/app.js */

// Styles
import './scss/main.scss';
// import './assets/scripts/demo';

//import './scss/combine.scss';
//import './assets/scripts/combine';

import './scss/accordion.scss';
import './assets/scripts/accordion';

$(document).ready(() => {
  console.log('Ready!');

  require('./assets/scripts/accordion');
});
