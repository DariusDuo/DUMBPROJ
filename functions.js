"use strict";

const makeCamel = function (someString) {
  return someString
    .split(" ")
    .map((a) => a.trim())
    .map((a) => a[0].toUpperCase() + a.slice(1))
    .join("");
};

makeCamel("Stand up and make this and that");
