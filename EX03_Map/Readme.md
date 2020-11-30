# Map
## Exercise 3 of 18
### Task
아래 코드의 for-loop를 Array#map으로 바꾸기
```javascript
    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
```
### Boilerplate
```javascript
    function doubleAll(numbers) {
      // SOLUTION GOES HERE
    }

    module.exports = doubleAll
```
### Array#map
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
```
### 참고
- [Array#map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 설명