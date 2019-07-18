/* src/app.js */

// Styles
import './scss/main.scss';
// import './assets/scripts/demo';

import './scss/combine.scss';
import './assets/scripts/combine';

import './scss/accordion.scss';
import './assets/scripts/accordion';

import './scss/combine-bs.scss';
import './assets/scripts/combine-bs';

$(document).ready(() => {
  console.log('Ready!');

  require('./assets/scripts/accordion');
  require('./assets/scripts/combine');
  require('./assets/scripts/combine-bs');
});
