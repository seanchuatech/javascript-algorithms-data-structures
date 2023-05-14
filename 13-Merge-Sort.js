/* 
Merge Sort

const arr = [-6, 20, 8, -2, 4]

mergeSort(arr) => Should return [-6, -2, 4, 8, 20]

------

Merge Sort Idea - 
Divide the array into sub arrays, each montaining only one element (An array with one element is considered sorted)
Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.
*/

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr)) // [-6, 20, 8, -2, 4]

// Big-O = O(nlogn)