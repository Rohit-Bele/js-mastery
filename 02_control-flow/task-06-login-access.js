

function checkAccess(isLoggedIn, isAdmin) {
  if (isLoggedIn && isAdmin) {
    return "Full Access";
  } else if (isLoggedIn && !isAdmin) {
    return "Limited Access";
  } else {
    return "Please Login";
  }
}

const user1 = checkAccess(true, true);  
const user2 = checkAccess(true, false);  
const user3 = checkAccess(false, false); 

console.log("User1:", user1); 
console.log("User2:", user2); 
console.log("User3:", user3); 
