//algo 1
// given an array and an additional value, insert this value at the beginning of the array
// return the new length of the array


function unshift(items, newItem) {
  for (i = items.length; i > 0; i--) {
    items[i] = items[i - 1];
  }
  items[0] = newItem;

  console.log(items);
  return items.length;
}

var arr1 = [];
console.log(unshift(arr1, 5));


// algo 2 
function shift(items) {
  var removedItem = items[0];
  for (i = 0; i < items.length; i++) {
    items[i] = items[i + 1];
  }
  items.pop();
  console.log(items);
  return removedItem;
}

var arr1 = [];
console.log(shift(arr1));
