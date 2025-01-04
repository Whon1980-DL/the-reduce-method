  
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
