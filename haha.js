// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubsets(arr, subsetLength) {
    let result = [];
  
    // Helper function to generate combinations using nested loops
    function generateCombinations(currentSubset, start) {
      console.log('currentSubset & start',currentSubset, start);
      if (currentSubset.length === subsetLength) { 
        result.push([...currentSubset]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) { 
        console.log('for loop i:', i)
        console.log('current subSte:arr{i} ', arr[i])
        currentSubset.push(arr[i]); 
        generateCombinations(currentSubset, i + 1);
        console.log('creent set before pop', currentSubset)
        currentSubset.pop();
        console.log('creent set after pop', currentSubset)
      }
    }
  
    generateCombinations([], 0); 
    return result;
  }
  const sampleArray = [1, 2, 3, 4];
  const subsetLength = 2;
  console.log('21',getSubsets(sampleArray, subsetLength));