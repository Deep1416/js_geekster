function searchInRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target is within the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // The right half is sorted

            // Check if the target is within the right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    // If the target is not found
    return -1;
}

// Example usage:
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const targetValue = 3;
const result = searchInRotatedArray(rotatedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}