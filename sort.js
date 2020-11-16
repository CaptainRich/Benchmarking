
/////////////////////////////////////////////////////////////////////////////////////
// A bubble sort 
const bubbleSort = (arr) => {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
  
      for (let i = 0; i < arr.length - 1; i++) {
        // Compare current element to next

        if (arr[i] > arr[i+1]) {
          // Swap using a third temp variable
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
  
          // Flag as not sorted to run loop again
          sorted = false;
        }
      }
    }
  
    return arr;
  };

  module.exports = { bubbleSort };