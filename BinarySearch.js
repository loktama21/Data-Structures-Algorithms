function binarySearch(nums, target){
    let a = 0;
    let z = nums.length - 1;
    let m = Math.floor((a + z)/ 2)
    while(target !== nums[m] && a <= z){
        if(target > nums[m]) a = m + 1;
        else z = m -1;
        m = Math.floor((a + z) / 2)
    }
    return nums[m] === target ? m: -1;  
}

// const result = binarySearch([0, 12, 23, 32, 45, 53,61, 79, 88], 79); // output: 7
// const result = binarySearch([0, 12, 23, 32, 45, 53,61, 79, 88], 89); // output: -1
// const result = binarySearch([], 3); // output: -1
const result = binarySearch([0, 12, 23, 32, 45, 53,61, 79, 88, 89, 89], 89); // output: 9
console.log(result);

