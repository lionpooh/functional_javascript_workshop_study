# Every Some
## Exercise 5 of 18
### Task
유효한 사용자를 파라미터로 받는 함수에서, 랜덤의 사용자 리스트를 받아 앞서 유효한 사용자랑 비교하여, 현재 사용자 리스트가 유효한지를 파악하는 함수를 리턴하기
> 원문 - Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

> `Array#Every`, `Array#Some`을 활용할 것

### Example
```javascript
    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false
```
goodUsers는 유효한 사용자 리스트, 이 리스트에 담긴 사용자를 파라미터로 `checkUsersValid(goodUsers)` 함수에 넘기고, 그 리턴 값의 함수에 비교할 사용자 리스트를 집어 넣어 해당 사용자 리스트가 유효하다면 true, 그렇지 않다면 false를 리턴한다.

### Boilerplate
```javascript
    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
      };
    }
    
    module.exports = checkUsersValid
```

### Array#Every

### Array#Some

### 참고
