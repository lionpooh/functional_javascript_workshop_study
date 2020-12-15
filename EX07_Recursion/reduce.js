function reduce(arr, fn, initial) {
    return function reduceRecursive(prev, index) {
        if(index > arr.length - 1) return prev;
        let curr = arr[index];
        return reduceRecursive(fn(prev, curr, index, arr), index + 1);
    }(initial, 0, arr);
}

module.exports = reduce

// function reduce(arr, fn, initial) {
//     return (function reduceOne(index, value) {
//         if (index > arr.length - 1) return value // end condition
//         return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//     })(0, initial) // IIFE. kick off recursion with initial values
// }
//
// module.exports = reduce