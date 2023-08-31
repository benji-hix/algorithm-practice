
/* algo 1
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

  var numbersA1 = [20, 10, 30];
  var numbersB1 = [10, 30, 20];
  var expected1 = [30, 40, 50];
  

  function sumArrColumns(nums1, nums2) {
    let newNums = [];
    
    for (var i = 0; i < nums1.length; i++) {
        newNums[i] = nums1[i] + nums2[i];
    }
    return newNums;
    }
  
console.log(sumArrColumns(numbersA1, numbersB1) + " should be " + expected1);

  /*****************************************************************************/
  
  /** algo 2
   * Given an array, return a new array which contains the items from a starting index
   * up to, but not including, an ending index
  */
  
  var arr1 = ["a", "b", "c", "d", "e"];
  var startIdx1 = 2;
  var stopIdx1 = 4;
  var expected1 = ["c", "d"]
  
  var arr2 = ["a", "b", "c", "d", "e"];
  var startIdx2 = 0;
  var stopIdx2 = 3;
  var expected2 = ["a", "b", "c"]
  
  var arr3 = ["e", "f", "g"];
  var startIdx3 = 0;
  var stopIdx3 = 5;
  var expected3 = ["e", "f", "g"]
  
  var arr4 = ["e", "f", "g"];
  var startIdx4 = -2;
  var stopIdx4 = 2;
  var expected4 = ["e", "f"]
  
  var arr5 = ["e", "f", "g"];
  var startIdx5 = 1;
  var stopIdx5 = 1;
  var expected5 = []
  
  var arr6 = [];
  var startIdx6 = 0;
  var stopIdx6 = 1;
  var expected6 = []


  function slice(items, startIdx, stopIdx) {
    if (startIdx < 0) startIdx = 0;
    if (stopIdx > items.length) stopIdx = items.length;

    let newItems = [];

    for (i = startIdx; i < stopIdx; i++) {
        newItems.push(items[i]);
    }
    return newItems;
  }

  console.log(slice(arr1, startIdx1, stopIdx1) + " should be " + expected1);
  console.log(slice(arr2, startIdx2, stopIdx2) + " should be " + expected2);
  console.log(slice(arr3, startIdx3, stopIdx3) + " should be " + expected3);
  console.log(slice(arr4, startIdx4, stopIdx4) + " should be " + expected4);
  console.log(slice(arr5, startIdx5, stopIdx5) + " should be " + expected5);
  console.log(slice(arr6, startIdx6, stopIdx6) + " should be " + expected5);