
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0 /* 0 here is the initial value and note the comma is separating the 1st and 2nd parameters to reduce(): 
The callback function and the initial value */);
/* let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
});
*/
// initial value of the accumulator (acc) result can be specified  }, 10); where 10 is
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
const totalYear = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYear);


// Grouping by a property, and totaling it too
// First think of what is the result we wanted: {Developer: 12, Designer: 4}
let experienceByProfession = teamMembers.reduce((acc, curr) => { /* this first {} is the boundary of the callback fn */
  // get the profession of each current value
  let key = curr.profession;
  // check if the key alreay exist
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {} /* {} is to set empty object as an initial value of the acc*/)
console.log(experienceByProfession);

let nameProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (acc[key] == null) acc[key] = []
  acc[key].push(curr.name)
  return acc;
}, {})
console.log(nameProfession);

let students = [
  {
    name: 'John',
    subjects: ['maths', 'english', 'cad'],
    teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: 'Emily',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 73, art: 95 },
  },
  {
    name: 'Adam',
    subjects: ['science', 'maths', 'art'],
    teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
    results: { science: 93, english: 88, maths: 97, art: 95 },
  },
  {
    name: 'Fran',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 87, art: 95 },
  }
];

// expected outcome { name: 'Adam', max: 88 } initial value = { name: "", max: 0 }

const biggest = students.reduce((acc, curr) => {
  let englishScore = curr.results.english;
  console.log(englishScore);
  acc = acc.max > englishScore ? acc : { name: curr.name, max: englishScore }
  return acc;
}, { name: "", max: 0 });

console.log(biggest);

const numbers = [0, 1, 2, 3, 4];

// expected answer 10
/* 
const sumNumbers = numbers.reduce((acc, curr) => {
  acc += curr;
  return acc
}, 0);

console.log(sumNumbers)
*/

//expected answer 01234
/*
const connectedNumbers = numbers.reduce((acc, curr) => {
 acc = acc + curr
  return acc
}, "");

console.log(connectedNumbers)
*/

// workout number of people who voted. Expected answer : 7
/*
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

const votedNumber = voters.reduce((acc, curr) => {
  acc = curr.voted === true ? acc += 1: acc;
  return acc
}, 0);

console.log(votedNumber);
*/

//Getting the total cost. Expected answer : 227005
/*
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishlist.reduce((acc, curr) => {
  acc += curr.price;
  return acc
}, 0);

console.log(totalCost);
*/

// FLatten array. Expected answer: ["1", "2", "3", true, 4, 5, 6]
/* 
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const concatArray = arrays.reduce((acc, curr) => {
  acc = acc.concat(curr);
  return acc
}, []);

console.log(concatArray)
*/

/* Include how many of the potential voters were in the ages 18 - 25, how many from 26 - 35, how many from 36 - 55, 
and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties.See the example output at the bottom.
Expected answer:
{ numYoungVotes: 1, numYoungPeople: 4, numMidVotesPeople: 3, numMidsPeople: 4, numOldVotesPeople: 3, numOldsPeople: 4 }
*/
/* 
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
const votersAgeCat = voters.reduce((acc, curr) => {
  if(curr.age >= 18 && curr.age <= 25 && curr.voted) {
  acc.numYoungVotes++;
  }
  if(curr.age >= 18 && curr.age <= 25) {
    acc.numYoungPeople++;
  }
  if(curr.age >= 26 && curr.age <= 35 && curr.voted) {
    acc.numMidVotesPeople++;
  }
  if(curr.age >= 26 && curr.age <= 35) {
    acc.numMidsPeople++;
  }
  if(curr.age >= 36 && curr.age <= 55 && curr.voted) {
    acc.numOldVotesPeople++;
  }
  if(curr.age >= 36 && curr.age <= 55) {
    acc.numOldsPeople++;
  }
  return acc;
}, { numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidsPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0 
});

console.log(votersAgeCat);
*/

const data = [
  { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
  { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
  { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
  { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
  { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
  { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

