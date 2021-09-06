// 'use strict';

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'shampoo', quantity: 1 },
    { product: 'lotion', quantity: 2 },
  ],
  user: {
    logged_in: true,
  },
};

const stateClone = new Object(state);
const stateCloneDeep = cloneDeep(state);
console.log(state);

state.user.logged_in = false;

// cloneDeep();
console.log(stateClone);
console.log(stateCloneDeep);
