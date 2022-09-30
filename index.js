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
/* 
  Write the Big O time complexity of your function here
  I think my Big O time complexity is O(n²) - Quadratic Time
  As it is a Nested iteration
  As the outter loop iterates, the inner loop will have to loop through less items
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

  No duplicate comparisions

  EG iteration

  hasTargetSum([3, 8, 12, 4, 11, 7], 10)

  results:
  3 + 8   = 11    is 10 = 11    false
  3 + 12  = 15    is 10 = 15    false
  3 + 4   = 7     is 10 = 7     false
  3 + 11  = 14    is 10 = 14    false
  3 + 7   = 10    is 10 = 10    true

  or 

  hasTargetSum([2,4,5,6,20,21], 41)

  results:
  2 + 4   = 6     is 41 = 6     false
  2 + 5   = 7     is 41 = 7     false
  2 + 6   = 8     is 41 = 8     false
  2 + 20  = 22    is 41 = 22    false
  2 + 21  = 23    is 41 = 23    false
  4 + 5   = 9     is 41 = 9     false
  4 + 6   = 10    is 41 = 10    false
  4 + 20  = 24    is 41 = 24    false
  4 + 21  = 25    is 41 = 25    false
  5 + 6   = 11    is 41 = 11    false
  5 + 20  = 25    is 41 = 25    false
  5 + 21  = 26    is 41 = 26    false
  6 + 20  = 26    is 41 = 26    false
  6 + 21  = 27    is 41 = 27    false
  20 + 21 = 41    is 41 = 41    true

  With above results, it will loop through every element, this was intentional to show that there is no duplicate comparisons
  EG when the element value is 6, it doesnt try to add the element with the value of 2 as it was already tried earlier
  It also shows that as the outter loop iterates, the inner loop will loop through less elements
  EG element value 20 only does 1 inner loop iteration.

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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, -4, -6, 1, 4, 6, 8, 7, 9], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,4,5,6,20,21], 41));
}

module.exports = hasTargetSum;
