# Filter
## Exercise 4 of 18
### Task
Array#filter를 사용해서 getShortMessages 함수를 완성하기
getShortMessages는 '.message' 프로퍼티를 가지는 messages 배열이 파라미터로, message의 길이가 50미만으로 이루어진 배열을 리턴함 
배열의 예시
```javascript
    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }
```

### Array#filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
```

### 참고
- [Array#filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 설명