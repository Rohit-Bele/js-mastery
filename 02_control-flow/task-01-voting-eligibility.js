
function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

const person1 = checkVotingEligibility(18);
const person2 = checkVotingEligibility(10);

console.log("Person1:", person1);
console.log("Person2:", person2);
