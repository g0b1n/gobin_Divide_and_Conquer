function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is already sorted, the rotation count is 0.
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length;
      const prev = (mid - 1 + arr.length) % arr.length;
  
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid; // Found the index of the minimum element
      } else if (arr[mid] <= arr[right]) {
        // The right half is sorted, so the rotation count is on the left side
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        // The left half is sorted, so the rotation count is on the right side
        left = mid + 1;
      }
    }
  
    return -1; // If the array is not rotated
  }
  
module.exports = findRotationCount