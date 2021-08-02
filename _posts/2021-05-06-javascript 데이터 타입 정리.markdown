---
layout: post
title:  "javascript 데이터 타입 정리"
date:   2021-05-06
comments: true
---
<br/>


<br/>
이번에 작성할 내용은 javascript에서 사용되는 데이터 타입에 대해 알아 보도록 하겠습니다.<br />
실습 위주의 글이니 실제로 본인의 작업환경에서 테스트해보고 이해하시기 바랍니다.
<br/>
### JS 데이터
- - -
```javascript
String: "", '', ``
Number
Boolean: true, false
undefined
Array: []
Object: {}
```
<br/>
### 문자열(string)
- - -
```javascript
const str = "   String test, abcde, abc, abcd, test@naver.com    ";
const abc = "test";
console.log('str.indexOf(abc): ', str.indexOf(abc)); // indexOf 문자열 찾기(문자열 존재하는 index 위치) 존재하지 않을 시 -1
console.log('str.slice(0, 6): ' ,str.slice(0, 6)); // 첫번째 인자에서 시작하여 두번째 인자 직전까지 문자열 자름
console.log('str.replace("test", "TEST"): ',str.replace("test", "TEST")); // 문자열 전환(첫번째 문자열 만나면 종료)
console.log('str.replaceAll("test", "TEST"): ', str.replaceAll("test", "TEST")); // 문자열 전환 전체
console.log('str.match(/.+(?=@)/)[0]): ', str.match(/.+(?=@)/)[0]); // 정규 표현식(@naver.com, 이메일 표기법 제거)
console.log('str.trim(): ', str.trim()); // 공백 제거
```
실행결과
<img src="/assets/image/20210506/1.png" alt="1">
<br/>
### Number(숫자, 수학)
- - -
```javascript
const numStr = "3.14";
console.log(typeof numStr, numStr);
console.log(typeof parseInt(numStr), parseInt(numStr));
console.log(typeof parseFloat(numStr), parseFloat(numStr));
console.log(Math.abs(-12)); // 절대값
console.log(Math.min(5, 8, 1)); // 최소값
console.log(Math.max(2, 34, 56, 18)); // 최대값
console.log(Math.ceil(3.1)); // 올림
console.log(Math.floor(3.6)); // 내림
console.log(Math.round(3.4)); // 반올림
console.log(Math.round(3.5)); // 반올림
```
실행결과
<img src="/assets/image/20210506/2.png" alt="2">
<br/>
### Array(배열)
- - -
```javascript
const numbers = [10, 22, 13, 44, 55, 6, 7];
const fruits = ["apple", "melon", "banana", "cherry", "mango", "lemon"];  
// index 로 element 선택
console.log('numbers[1]: ', numbers[1]);
console.log('fruits[1]: ',fruits[1]);

console.log('numbers.length: ', numbers.length); // 배열 길이
console.log('fruits.length: ', fruits.length); // 배열 길이

// find 함수는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
console.log(`numbers.find((e) => e > 30) find: ${numbers.find((e) => e > 30)}`); // (즉 30 보다 큰 첫번째 요소 = 44)

// findIndex 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
// 만족하는 요소가 없으면 -1을 반환합니다.
const findIndexNum = fruits.findIndex((item) => {
  return /^c/.test(item);
});
console.log(`findIndexNum: ${findIndexNum}`);

// concat 함수는 둘 또는 둘 이상의 문자열을 연결하고 연결한 문자열을 반환합니다.
// 원본의 배열의 값은 유지된다. (이 내용이 핵심)
console.log(`numbers.concat(fruits): ${numbers.concat(fruits)}`); //

// forEach 함수는 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
console.log(
  fruits.forEach((item, index) => {
    console.log(`forEach item: ${item}, index: ${index}`);
  })
);

// map 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를
// 호출한 결과를 모아 새로운 배열을 반환합니다.
// forEach와 가장 큰 차이점은 새로운 배열을 반환한다에 중점을 둡니다.
const newFruits = fruits.map((item, index) => {
  console.log(`map item: ${item}, index: ${index}`);
  return item;
});
console.log(newFruits);

// filter 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// filter 메서드 또한 새로운 배열을 반환한다는 것에 중점을 둡니다.
const filterNum = numbers.filter((i) => i > 30);
console.log('numbers.filter((i) => i > 30): ', filterNum);

// includes 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
const isTrue = numbers.includes(44);
console.log(`numbers.includes(44): ${isTrue}`);
const isFlase = numbers.includes(100);
console.log(`numbers.includes(100): ${isFlase}`);

// push, unshift (원본 데이터를 수정함(불변성 이슈))
// push 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// unshift 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
const data = [1, 2, 3, 4];
data.push(5);
console.log(`push 후 data: ${data}`);
data.unshift(0);
console.log(`unshift 후 data: ${data}`);

// reverse 메서드는 배열의 순서를 반전합니다.
// 원본 배열을 수정함(불변성 이슈)
const reverseData = data.reverse();
console.log(`reverseData는 data의 배열 순서를 반환함 : ${reverseData}`);
console.log(
  `하지만 원본 data도 수정되어진다는 것을 꼭 명시할 것(불변성 이슈) ${data}`
);

// splice 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// 첫번째 인자: 시작점, 두번째 인자: 삭제 할 개수
// 원본 배열을 수정함(불변성 이슈)
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log('months.splice(1, 0, "Feb"): ', months);
months.splice(4, 1, "May");
console.log('months.splice(4, 1, "May"): ', months);
months.splice(1, 2);
console.log('months.splice(1, 2): ', months);
```
실행결과
<img src="/assets/image/20210506/3.png" alt="3">
<br/>
### Object(객체)
- - -
```javascript
import _ from "lodash";

// Object.assign 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다.
// 대상 객체를 반환합니다. 불면성 이슈 항상 생각하고 사용해야 합니다.
const obj1 = { x: "abc", y: 1 };
const obj2 = Object.assign(obj1);
const obj3 = Object.assign({}, obj1); // 객체 불변성을 유지할기 위한 방법
const obj4 = { ...obj1 }; // 객체 불변성을 유지할기 위한 방법
console.log("obj1", obj1);
console.log("obj2= Object.assign(obj1)", obj2);
console.log("obj3= Object.assign({}, obj1)", obj3);
console.log("obj4= { ...obj1 }", obj4);

// z 라는 데이터 추가 과연 obj1, obj2, obj3, obj4의 데이터 불변성은??
obj1.z = true;
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);
console.log("obj4", obj4);

console.log('obj1 === obj2: ', obj1 === obj2);
console.log('obj1 === obj3:', obj1 === obj3);
console.log('obj1 === obj4:', obj1 === obj4);

// 구조 분해 할당(Destructuring assignment)
// 비구조화 할당
const user = {
  accout: "zztkdfo",
  age: 33,
  mail: "zztkdfo@gmail.com",
  dept: "ITSM TF",
};

const { accout, age, mail, dept = "IT솔루션개발팀", phone } = user;

console.log(`성명: ${accout}`); // user.accout
console.log(`나이: ${age}`); // user.age
console.log(`주소: ${mail}`); // user.mail
console.log(`부서: ${dept}`); // user.dept
console.log(`연락처: ${phone}`); // user.phone

const dataList = ["korea", "usa", "china", "japan"];
const [a, b] = dataList;
console.log(a, b);

// 전개 연산자(Spread)
// 전개 연산자를 이용한 복사에는 1차원에서만 유효하다.
const userList = ["user1", "user2", "user3", "user4", "user5", "user6"];
console.log('userList: ',userList);
console.log('...userList: ', ...userList);

const getUser = (u1, u2, u3) => {
  return {
    u1: u1,
    u2: u2,
    u3: u3,
  };
};

const getUsers = (u1, u2, u3, ...rest) => {
  return {
    u1: u1,
    u2: u2,
    u3: u3,
    rest, // => rest: rest
  };
};

console.log('getUser(userList[0], userList[1], userList[2]): ',getUser(userList[0], userList[1], userList[2]));
console.log('getUser(...userList): ', getUser(...userList));
console.log('getUsers(...userList):', getUsers(...userList));

// 데이터 불변성(Immutability)
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)(lodash cloneDeep 사용, immutable.js 같은 immer.js 같은 라이브러리 사용)
// *상태를 변경하지 않는 것 >> 매우 중요한 개념
// 추후 react의 상태 관리와 매우 관련있는 개념으로 이어집니다.
const employee = {
  name: "zztkdfo",
  age: 33,
  dept: ["IT솔루션개발팀", "ITSM TF"],
  mail: "zztkdfo@gmail.com",
};

// 얕은 복사
const copyEmployee = employee;
const copyEmployee2 = Object.assign({}, employee);
const copyEmployee3 = { ...employee };

// 깊은 복사 lodash 이름처럼 통상적으로 _.(low dash)로 사용
const copyEmployee4 = _.cloneDeep(employee);

console.log("employee", employee);
console.log("copyEmployee", copyEmployee);
console.log("copyEmployee2= Object.assign({}, employee)", copyEmployee2);
console.log("copyEmployee3= { ...employee }", copyEmployee3);

// 배열, 객체 (메모리에 의한 복사)
employee.dept.push("DevOps");
// 값에 의한 복사
employee.age = 32;

// 의도치않게 copyEmployee의 dept도 추가 됩니다. DevOps
console.log("employee", employee);
console.log("copyEmployee", copyEmployee);
console.log("copyEmployee2= Object.assign({}, employee)", copyEmployee2);
console.log("copyEmployee3= { ...employee }", copyEmployee3);

// 의도한 결과
console.log("copyEmployee4= _.cloneDeep(employee)", copyEmployee4);

// 결과
console.log('employee === copyEmployee:', employee === copyEmployee);
console.log('employee === copyEmployee2:', employee === copyEmployee2);
console.log('employee === copyEmployee3:', employee === copyEmployee3);
console.log('employee === copyEmployee4:', employee === copyEmployee4);

```
실행결과
<img src="/assets/image/20210506/4.png" alt="4">
<br/>
이번 작성 주제는 javascript의 데이터타입에 관한 내용이였습니다. 실습 위주로 작성하였기에 한번씩 꼭 따라해보시면 좋을 것 같습니다. <br />
그리고 Object 관련 내용에서 우리는 얕은복사, 깊은복사에 대한 내용을 추가로 lodash와 같은 라이브러리를 왜 사용하는지에 대한 내용을 간단한 소스 예시와 함께 다음 블로그에서 설명하도록 하겠습니다.<br />
감사합니다.
