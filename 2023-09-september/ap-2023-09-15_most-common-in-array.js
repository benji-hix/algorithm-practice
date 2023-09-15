const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [6,4,3,2,7,8,8,8,8,8,8,3,3,3,1111,1111,1111,1111,1111,1111];
const expected6 = [8,1111];

const nums7 = [5,5,5,1,1,1,4,4,4];
const expected7 = [];

function mode(nums) {
    let dict = {}
    let values = [] //* array of # of occurences of each element

    //* edge case: nums is empty or has 1 value
    if (nums.length <= 1) {
        return nums
    }

    //* create dictionary that tracks unique elements and # of occurences
    for (let i = 0; i < nums.length; i++) {
        dict.hasOwnProperty(nums[i]) ? dict[nums[i]]++ : dict[nums[i]] = 1
    }

    //* create array of just # of occurences of each element
    for (let key in dict) {
        values.push(dict[key])
    }

    //* edge case: every element in array occurs equal number of times
    const allEqual = arr => arr.every(val => val === arr[0])
    if (allEqual(values)) return answer

    //* calculate what max # of occurences is
    let maxOccurenceCount = values[0]
    for (let i = 0; i < values.length; i++) {
        if (values[i] > maxOccurenceCount) maxOccurenceCount = values[i]
    }

    
    //* if element in array occurs max # of times, add to answer array
    let answer = []
    for (const key in dict) {
        if (dict[key] == maxOccurenceCount) {
            answer.push(parseInt(key))
        }
    }

    return answer
}

console.log(mode(nums1))
console.log("should be ")
console.log(expected1)

console.log(mode(nums2))
console.log("should be ")
console.log(expected2)

console.log(mode(nums3))
console.log("should be ")
console.log(expected3)

console.log(mode(nums4))
console.log("should be ")
console.log(expected4)

console.log(mode(nums5))
console.log("should be ")
console.log(expected5)

console.log(mode(nums6))
console.log("should be ")
console.log(expected6)

console.log(mode(nums7))
console.log("should be ")
console.log(expected7)

