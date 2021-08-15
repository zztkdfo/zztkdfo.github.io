---
layout: post
title:  "javascript 데이터 타입 정리(2)"
date:   2021-05-21
comments: true
---
<br/>


<br/>
이번에 작성할 내용은 이전 [javascript 데이터 타입 정리]의 글에 대한 연장선으로 [lodash] 라이브러리에 대한 필자의 생각(<strong><u>꼭 사용해야 하는 이유</u></strong>)을 정리한 글 입니다.<br />
lodash 라이브러리가 무엇이고 어떻게 사용하는지에 대한 내용은 구글링 해보면 워낙 많은 데이터가 있으므로 개념부터 사용법에 대해서는 생략하도록 하겠습니다. lodash 는 low(아래) dash(줄)이란 의미로 통상적으로 '_'로 사용 합니다.<br />
<br/>
### lodash와 같은 라이브러리를 써야 하는 이유
- - -
```javascript
const groupA = [
  { userId: 1, userName: "userA" },
  { userId: 2, userName: "userB" },
];

const groupB = [
  { userId: 1, userName: "userC" },
  { userId: 4, userName: "userD" },
];

const groupC = groupA.concat(groupB);
console.log("concat groupC: ", groupC);
console.log("uniqBy groupC: ", _.uniqBy(groupC, "userId"));
console.log("unionBy groupC: ", _.unionBy(groupA, groupB, "userId"));
```
실행결과
<img src="/assets/image/20210521/1.png" alt="1">
<br/>
lodash의 uniqBy는 중복을 제거하는 메소드 입니다. <br />
실제로 개발자들이 중복 데이터 제거 로직 또는 중복 데이터를 제외한 합침 로직은 상당히 빈번하게 작성하는 코드 중 하나 입니다.<br />
우리는 uniqBy를 모를 경우 이정도의 소스는 금방 작성하지만 엄청난 부수효과를 일으키며 잠정적인 오류를 발생할 수 있습니다. 또한 소스의 양도 어마어마하게 줄어들고 가독성도 상당히 좋습니다. <br />
또한 주석이 없을 경우 불과 일주일뒤에 소스를 본다면 다시 파악해야 하는 비용이 발생 합니다. <br />
그렇기 때문에 이제 우리 개발자들은 믿을 만한 라이브러리를 활용할 수 있는 것이 안전하고 정확한 코드를 작성하는 방법 이라고 생각 합니다.
<br/>
```javascript
let userIds = []
let result = []
groupC.forEach((group, index) => {
   if(userIds.length > 0) {
     if(userIds.includes(group.userId) === false) {
       userIds.push(group.userId)
       result.push({userId:group.userId, userName:group.userName})
     }
   } else {
     userIds.push(group.userId)
     result.push({userId:group.userId, userName:group.userName})
   }
})
```
다음 소스를 보겠습니다. <br />
제가 임의로 작성한 중복제거 코드입니다. <br />
lodash에서 uniqBy메소드 한 단어로 해결 할 수 있는 방법을 위의 소스와 같이 if else로 분기도 태워야 하고 id포함 여부도 체크해야되고 얼핏보면 간단하지만 처음보는 개발자라면 또 다시 소스를 분석해야되고 다시 일주일 뒤에 본다하면 또 다시 분석해야 합니다. <br />
이렇게 위에서 언급했듯이 오류도 야기할 수 있으며 계속해서 비용이 발생하고 있습니다.

```javascript
const userList = [
  { userId: 1, userName: "userA" },
  { userId: 1, userName: "userB" },
  { userId: 3, userName: "userC" },
  { userId: 4, userName: "userD" },
  { userId: 5, userName: "userE" },
  { userId: 6, userName: "userF" },
  { userId: 7, userName: "userG" },
  { userId: 8, userName: "userH" },
];

console.log(_.find(userList, { userId: 1 }));
console.log(_.find(userList, { userName: "userC" }));
console.log(_.findIndex(userList, { userName: "userC" }));
console.log(_.remove(userList, { userId: 1 }));
console.log(userList);
```
lodash의 find는 select 하는 함수 입니다. <br />
다만 같은 조건의 데이터일 경우 index가 빠른 것을 결과로 반환 합니다.<br />
여기서도 말하고 싶은 것은 만약 lodash의 find를 몰랐다면??<br />
우리는 for문을 돌리고 변수에 찾으려는 id 또는 name을 할당하고
if 분기하여 찾아서 result 변수에 담거나 출력 했을 것입니다.<br />
findIndex는 해당 결과값의 index를 반환 합니다.<br />
remove 메소드 또한 데이터베이스의 delete로 생각 하시면 됩니다.<br />
remove는 해당 조건이 맞을 경우 해당 조건에 대한 데이터를 전부 삭제 합니다. <br />
다시 한번 강조하자면 우리가 find, findIndex, remove를 우리가 직접 코딩했다면 부수효과, 점진적 오류, 코드량, 가독성 등등.. 너무 많은 단점이 생기게 됩니다.<br />
따라서 필자는 이러한 여러 장점이 존재하기 때문에 우리는 이미 안전하고 증명된 여러 라이브러리들을 안쓸 이유가 전혀 없습니다.<br />
따라서 lodash를 한번 정도 쭉 보시는것을 추천 드립니다.<br />
[lowdb]도 강력한 api, json 데이터를 db처럼 사용하는 api 입니다.<br />
감사합니다.<br /><br />


[lowdb]: https://www.npmjs.com/package/lowdb
[lodash]: https://lodash.com/docs/4.17.15
[javascript 데이터 타입 정리]: https://zztkdfo.github.io/posts/javascript-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85-%EC%A0%95%EB%A6%AC/
