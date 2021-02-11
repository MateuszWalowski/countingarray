"use strict";

var numbers = [];
let N = 0;
var timer = setInterval(function () {
  numbers.push(N);
  console.log(numbers.slice(-9));
  N++;
}, 1000);
