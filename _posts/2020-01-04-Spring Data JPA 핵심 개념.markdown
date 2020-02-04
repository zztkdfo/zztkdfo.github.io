---
layout: post
title:  "Spring Data JPA 핵심 개념"
date:   2020-01-04 10:03:11 +1930
comments: true
---
<br/>

이번 블로그에서는 앞으로 사용할 Spring Data JPA(Java Persistence API)에 대한 핵심 개념에 대해 먼저 알아보도록 하겠습니다.
<br/>
### Spring Data JPA(Java Persistence API)란?
- - -
[Spring Data JPA(Java Persistence API)]는 자바 플랫폼 SE와 자바 플랫폼 EE를 사용하는 응용프로그램에서 <B>관계형 데이터베이스의 관리를 표현하는 자바 API</B>입니다.
기존에 EJB에서 제공되던 엔터티 빈(Entity Bean)을 대체하는 기술입니다. 자바 퍼시스턴스 API는 JSR 220에서 정의된 EJB 3.0 스펙의 일부로 정의가 되어 있지만 EJB 컨테이너에 의존하지 않으며 EJB, 웹 모듈 및 Java SE 클라이언트에서 모두 사용이 가능합니다. 또한, 사용자가 원하는 퍼시스턴스 프로바이더 구현체를 선택해서 사용할 수 있습니다.
사전적 의미는 위의 글과 같습니다.
<br/>
필자가 JPA를 사용하면서 개발 할 때 느꼈던 가장 큰 이점에 대해서 간략하게 3가지 정도만 설명해 보겠습니다.

### 1. 데이터베이스에 종속적인 SQL문 없이 개발이 가능 합니다.
JPA를 사용하기 전에 우리는 대게 아래와 같이 사용 했던 기억이 납니다.
```
ResultSet rs = stmt.executeQuery("SELECT test_id, test_name FROM TEST_TABLE");

Test test = new Test();
test.setTestId(rs.getString("test_id"));
test.setTestName(rs.getString("test_name"));

return test;
```
우리는 위의 같은 코드가 너무 익숙해져 있어서 불편한 사항이 없었습니다.
다만, JPA를 사용하기 전까진 말입니다.<br/>
똑같이 동작하는 소스를 JPA로 간략하게 바꿔본다면 아래의 소스와 같이
변경 할 수 있습니다.

```
Optional<Test> optTest = TestRepository.findById(testId);
if (optTest.isPresent()) {
    Test test = optTest.get();
    return test;
}
```
필자가 여기서 말하고 싶은 내용은 이제는 더이상 개발자가 SQL문을 작성하는데 시간을 쓸 필요가 없다는 것 입니다. 원하는 SQL는 JPA에게 맡기고 우리는 도메인 설계와 Service 로직에 더욱 신경쓰자는 것 입니다. 다만, 개발자가 이제 더 이상은 SQL문을 공부하지 말자는 뜻은 아님을 명심하기 바랍니다.
<br/>
또한 mysql, mssql, oracle의 SQL문 상관없이 개발이 가능하다는 이점도 있습니다. 예를 들어 로컬에서는 mysql로 테스트를 진행 하였는데, dev서버와 live서버는 mssql 데이터베이스를 사용 할 수 있습니다.

### 2. 생산성
학습곡선이 높다는 이야기도 있습니다. 하지만 JPA에 익숙해 진 후 우리는 도메인 설계에 충분히 집중을 한다면 CRUD에 대한 Service를 단기간 안에 뚝딱 만들 수 있습니다. 위의 내용과 같이 우리는 SQL문을 작성하지 않고 JPA의 기능을 보다 자세히 알고만 있으면 개발에 큰 어려움이 전혀 없습니다. 다만 추후에 블로그에도 설명할 예정인 도메인 설계 시, 도메인들의 관계(1:N, N:1)와 성능에 대해서만 보다 심도있게 학습이 필요합니다.  
```
// Select
Optional<Test> optTest = TestRepository.findById(testId);

// Insert, Update
Test test = null;
if(optTest.isPresent()){
  test = optTest.get();
}else{
  test = new Test();
}

test.setTestName("Test Name");
TestRepository.save(test);

// Delete
if(optTest.isPresent()){
  TestRepository.deleteById(id);
}
```

### 3. 유지보수
생산성이 좋으면서 또한 느꼈던 가장 큰 이점은 유지보수가 굉장히 좋습니다.
```
ResultSet rs = stmt.executeQuery("SELECT test_id, test_name FROM TEST_TABLE");

Test test = new Test();
test.setTestId(rs.getString("test_id"));
test.setTestName(rs.getString("test_name"));

return test;
```
위의 예시에서 우리는 다른부서로 부터 <B>Test Code</B> 컬럼을 추가해 달라는 요구사항을 받았으면 우리는 TEST 테이블에 Test Code 컬럼을 추가하고 Test 객체에 testCode 필드를 추가해야 합니다.

```
public class Test{
  private Long testId;
  private String testName;
  private String testCode; // 추가
  ...
}

// INSERT 문 수정
String sql = "INSERT INTO TEST(TEST_ID, TEST_NAME, TEST_CODE) VALUES (?,?,?)";

// UPDATE 문 수정
...
// SELECT 문 수정
...

// Return 객체에 바인딩
test.setTestCode(rs.getString("test_code"));
return test;
// 등등
```
우리는 하나의 새로운 컬럼이 추가하거나 삭제가 되었을 경우 위의 코드와 같은 일련의 과정을 해왔습니다. 물론 해당 과정들이 너무 당연한 것이라 불편하다고 생각 할 수 없을 정도로 자연스러웠습니다. JPA를 사용 하고 개발해 보니 위의 개발 및 유지보수가 상당히 불편하다는 것을 알 수 있습니다.

```
public class Test{
  private Long testId;
  private String testName;
  private String testCode; // 추가
  ...
}

```   
JPA에서는 위에서 계속 강조 했듯이 SQL문은 개발자가 신경쓰지 않습니다. 그냥 추가되었거나 삭제 할 컬럼만 해당 도메인(객체)에서만 신경써주면 해당 유지보수 작업은 금방 해결 할 수 있습니다.
<br/>
위에서 언급한 3가지는 현재 JPA를 사용하며 개발하고 있는 필자가 느낀 JPA의 가장 큰 장점이라 생각 하고 있습니다. 필자와 같이 공부하여 JPA를 마스터 하길 바라겠습니다.


[Spring Data JPA(Java Persistence API)]: https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%ED%8D%BC%EC%8B%9C%EC%8A%A4%ED%84%B4%EC%8A%A4_API
