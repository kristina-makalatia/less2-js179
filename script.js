// use strict mode
"use strict";

let x = 30;
console.log(x);

// if statement
let number = 25;

if (number < 21) {
  console.log("hi");
} else if (number > 20 && number < 17) {
  console.log("hi2");
} else {
  console.log("error");
}

let resultStatement =
  number < 21
    ? "hi"
    : number > 20 || number < 17
    ? "hi2"
    : number < 3
    ? "hi3"
    : "error";

console.log(resultStatement);

// prompt
// let question = Number(prompt("ENter Number"));
// console.log(question);
// console.log(typeof question);

// if (question % 3 == 0) {
//   console.log("luwi");
// } else {
//   console.log("odd");
// }

// data types - objects
// array
//  0       1
let arrayNames = ["mariami", "anna", ["nini", "luka"], "salome"];
//0            1              2            3
console.log(arrayNames[2][1]);
console.log(arrayNames.length);
console.log(arrayNames[3]);
console.log(arrayNames[arrayNames.length - 2]);

// object
let userInfo = {
  userName: "anna",
  userAge: 18,
  userPhone: {
    code: 593,
    phone: 544545,
  },
  skills: ["html", "scss", "python"],
  comments: [
    {
      id: 1,
      text: "Hello1",
    },
    {
      id: 2,
      text: "hello2",
    },
  ],
  // key:value
};

// 1. dot notation
console.log(userInfo.comments[0].text);

// 2.bracket notation
console.log(userInfo["comments"][0]["text"]);

// obj manipalution
let userNew = {
  userfName: "luka",
  userAge: 17,
};

userNew.userAge = 18;
userNew.gender = "male";
delete userNew.userfName;
console.log(userNew);

// loop - array
let userNamesArray = ["anna", "mariami", "salome", "nika", "beka"];
//          0        1        2            3
// 1.for loop
for (let i = 1; i < 4; i++) {
  console.log(userNamesArray[i]);
}

// i++ => i = i+ 1

// for of
let skillsNew = ["html", "css", "nodeJs", "php"];

for (let item of skillsNew) {
  console.log(item); //values
}

for (let key in skillsNew) {
  console.log(key); //index
}

//
let arrayNew = [
  [100, 15],
  [22, 31],
  [47, 18],
];
//           0         1          2

// for (let i = 0; i < arrayNew.length; i++) {
//   const element = arrayNew[i];
// //   console.log(element); // [100, 15]  [22, 31]  [47, 18]
//   for (let index = 0; index < element.length; index++) {
//     const numberElement = element[index];
//     console.log(numberElement); //100 15 22 31...
//   }
// }

//
for (let item of arrayNew) {
  // console.log(item); //[100, 15]  [22, 31]  [47, 18]
  for (let el of item) {
    console.log(el); //100 15 22 31
  }
}

// while
let skillsNew2 = ["html", "css", "c#", "bootstrap"];

let index = 0;
while (index < skillsNew2.length) {
  console.log(skillsNew2[index]);
  index++;
}

// break and continue loop
let item = 0;

while (true) {
  console.log(item);
  item++;
  if (item === 11) {
    break;
  }
}

//
let numbersArray = [100, 25, 14, 36, 17];

for (let item of numbersArray) {
  if (item === 14) {
    continue;
  }
  console.log(item);
}

//
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);//0 1 2 4 5
}


