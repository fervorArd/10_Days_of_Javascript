/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((x, y) => { return x > y; } );
    let max = Math.max(...nums);
    for(let i=(nums.length-1);i>=0;i--){
        if(nums[i]<max){
            return nums[i];
            break;
        }
    }

}