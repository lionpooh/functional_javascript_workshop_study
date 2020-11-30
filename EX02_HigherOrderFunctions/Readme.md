# Higher Order Functions (고차 함수)
## Exercise 2 of 18
Higher-Order Function은 아래의 두가지 사항을 만족하는 함수이다.
- 하나 이상의 인자를 받는다.
- 결과를 반환한다.
여기에 포함되지 않는 함수들은 First-Order Function(일급 함수)라 한다.
- 함수를 다른 변수와 동일하게 다루어 변수처럼 값으로 다룰 수 있다.

명령형 언어(대표적으로 C)와는 다르게, 자바스크립트는 일급 함수 로서 함수를 사용할 수 있게 해준다. 
자바스크립트에서 함수는 Function.prototype 으로 부터 상속받은 오브젝트로 Strings, Numbers 같은 값 처럼 변수에 저장하고, 오브젝트의 프로퍼티로서 혹은 다른 함수의 파라미터로서도 넘겨줄 수 있다.

아래는 함수와 다른 값들의 차이는 코드에서 호출 할 때의 차이다. 
```javascript
const foo = function (bar) {return bar}
const bar = 'Hello World'

console.log(foo(bar))
```
위의 코드에서 foo라는 함수를 호출 할 때, 일반적인 변수 호출과는 다르게 괄호()와 그에 적절한 파라미터를 집어 넣어 주고 있다.
### Task
첫번째 파라미터를 **function**, 두번째 파라미터를 **num**으로 받아서, **num**횟수 만큼 파라미터로 전달받은 **function**을 실행 할 function을 작성하기
### Boilerplate
```javascript
    function repeat(operation, num) {
        // SOLUTION GOES HERE
    }
    
    // Do not remove the line below
    module.exports = repeat
```