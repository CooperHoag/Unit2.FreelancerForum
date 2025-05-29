/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


// Write a function that returns a freelancer object with a 
  // randomly generated name, occupation, and rate according to the provided constants.

// Initialize a state variable to an array of NUM_FREELANCERS freelancer objects.
const freelancers = Array.from({ length: NUM_FREELANCERS }, () => generateFreelancer());   
// I asked co-pilot for help on this and it told me about Array.from
  // Array.from lets you create an arrayt of a specific length
    // length: NUM_FREELANCERS is listed as 100 in the constants above
  // () => generateFreelancer() tells Array.from to fill each spot with a new freelancer from the function
  // this has to be above the function (set as the global variable) because the function is only responsible for creating one at a time

// create the function
function generateFreelancer () {
  // randomly select name and occupation
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  // randomly select rate betweeen 20 & 200 - Google AI helped on this one
  // const rate = PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE.length)]; // my first take
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  // we subtract the min from the max so the random number (0-1) multiplies by size of the length
  // we +1 so that the range encludes PRICE_RANGE.max, otherwise it stops at 199.99
  // we add the min to the random number because we don't want the random number to start at 0
  // now it will select a random number between 20 and 200
  // Math.floor rounds it down      
        
  return {name, occupation, rate};
}
console.log(generateFreelancer());
console.log(freelancers)

// Write a function that returns the average rate of all freelancers in state.
function calculateAverageRate(freelancers) {
  
}