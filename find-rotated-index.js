function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
        // Found the number, return its index
      }
  
      // Check which half is sorted
      if (arr[left] <= arr[mid]) {
        // The left half is sorted
        if (arr[left] <= num && num < arr[mid]) {
          // If num is within the left sorted half, search there
          right = mid - 1;
        } else {
          // Otherwise, search the right unsorted half
          left = mid + 1;
        }
      } else {
        // The right half is sorted
        if (arr[mid] < num && num <= arr[right]) {
          // If num is within the right sorted half, search there
          left = mid + 1;
        } else {
          // Otherwise, search the left unsorted half
          right = mid - 1;
        }
      }
    }
  
    return -1; // Number not found in the array
  }

module.exports = findRotatedIndex