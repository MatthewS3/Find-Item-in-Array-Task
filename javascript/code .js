/*
<<<=================== Question 1: ===================>>>

Write a JavaScript function to find the unique elements from two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
*/

function difference(arr1, arr2) {
    // Combine both arrays
    const combinedArray = arr1.concat(arr2);
  
    // Use a Set to eliminate duplicates
    const uniqueSet = new Set(combinedArray);
  
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
  
    // Convert each element to a string
    const resultArray = uniqueArray.map(element => String(element));
  
    return resultArray;
  }
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));                   // ["1", "2", "3", "10", "100"]
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));  // ["1", "2", "3", "4", "5", "6"]
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));                   // ["1", "2", "3", "10", "100"]
  