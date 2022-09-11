function isPalindrome(word) {
  // Write your algorithm here
  const newOriginal = firstOriginal(word);
// returns true only if the notOriginal is exatly the same as word
  if(word === newOriginal){

    return true;
  }
  else{
  return false;
  }
}

// word to be converted in reverse e.g(cow >> woc)
function firstOriginal (word) {
return word.split('').reverse().join('');
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
