function hasTargetSum(array, target) {
  // Write your algorithm here

  //const arr = array.filter(num => num < target); // removes values higher than target, works only with positive numbers
  const arr = array
  
  for(let i = 0; i < arr.length; i++){
    
    for(let ii=(i+1); ii < arr.length; ii++){
      if((arr[i] + arr[ii]) === target){
        return true;
      }
    }
  }
  return false;
}

hasTargetSum([-7, 10, 4, 8], 3);
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Uses a loop inside a loop
  The first loop sets the base element (eg index 0), second loop sets to the next element from the base element (eg index 1)
  Sums up both elements and compares against target
  If no match, base element (eg index 0) remains, second element will move onto the next element (eg index 2)
  Repeats - Sums up both elements and compares against target
  If base element (eg index 0) doesnt match with the remaining elements (index 1 to end of array), it will move onto the next element (eg index 1)
  Repeats - The first loop sets the base element (eg index 1), second loop sets to the next element from the base element (eg index 2)
  Repeats - Sums up both elements and compares against target

  If match is found return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
