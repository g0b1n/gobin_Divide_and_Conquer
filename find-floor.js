function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor as -1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] <= x) {
        // If the current element is less than or equal to x, it could be a potential floor.
        // Update the floor and search for a larger one on the right side.
        floor = arr[mid];
        left = mid + 1;
      } else {
        // If the current element is larger than x, search on the left side.
        right = mid - 1;
      }
    }
  
    return floor;
  }

module.exports = findFloor