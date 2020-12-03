# Reduce
## Exercise 6 of 18
## Task
주어진 문자열 배열에서 해당 문자열이 몇개가 있는지를 Array#reduce를 이용해서 결과를 object에 담기
> 원문 Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
## Example
```javascript
    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    console.log(countWords(inputWords))
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
```
## Boilerplate
```javascript
    function countWords(inputWords) {
      // SOLUTION GOES HERE
    }

    module.exports = countWords
```
## Array#reduce
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

### Syntax
> arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

### 참고
- [Array#reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 설명
