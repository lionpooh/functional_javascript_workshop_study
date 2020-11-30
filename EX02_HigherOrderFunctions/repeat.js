function repeat(operation, num) {

    if(num > 0) {
        operation()
        num = num - 1
        repeat(operation, num)
    }
    // for (let i = 0; i < num; i++) {
    //     operation();
    // }

}

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
// }

// Do not remove the line below
module.exports = repeat
