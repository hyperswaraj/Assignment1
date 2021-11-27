"use strict";

function Person(fname, lname, oaddress) {
  this.firstName = fname;
  this.lastName = lname;
  this.officeAddress = oaddress;
}

const Modi = new Person(
  "Narendra",
  "Modi",
  "Gujarat-India"
);
console.log(Modi);

const Kejri = new Person(
  "Arwind",
  "Kejriwal",
  "New Delhi-India"
);
console.log(Kejri);

const Pappu = new Person(
  "Rahul",
  "Gandhi",
  "Ghar ka na ghaat ka-India"
);
console.log(Pappu);
