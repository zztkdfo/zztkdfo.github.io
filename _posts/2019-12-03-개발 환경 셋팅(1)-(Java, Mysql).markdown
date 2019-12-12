---
layout: post
title:  "개발 환경 셋팅(Java, Mysql)"
date:   2019-12-02 21:03:11 +1930
comments: true
---
<br/>

지금부터 개발환경에 대해 셋팅을 해보겠습니다.<br/>
먼저 Java(spring boot, JPA)를 베이스로 개발을 할 것 이며, DB는 mysql를 사용 할 것입니다. 필요에 따라 추후 redis, graphQL, Swagger UI, React(typescript)를 사용 할 것 입니다.<br/>
현재 필자의 개발환경은 Docker로 구성 하였으나, [Docker]는 러닝커브가 생각보다 높으므로, 추후 Docker를 따로 카테고리화 하여 블로그에 작성 할 것 입니다.
아래의 기본 개발환경 셋팅은 여러 블로그에서 보다 자세히 작성한 글이 많으니
최대한 간략하게 설명 하도록 하겠습니다.  
<br/>
### 1. java(openjdk) 셋팅 - mac
 1-1. 본인의 컴퓨터에 java가 설치되어 있는지 확인
 <img src="/assets/image/uninstall_openjdk.png" alt="uninstall_openjdk">
 <br/>
1-2. 해당 url([Openjdk])에서 본인의 os 환경에 맞는 제품 선택
<img src="/assets/image/install_openjdk_url.png" alt="install_openjdk_url">
<br/>
1-3. Download 확인 후, 아래의 이미지와 같이 해당 파일을 그대로 해당 이미지로 이동
<img src="/assets/image/openjdk_location.png" alt="openjdk_location">
<br/>
1-4. 최종 확인
<img src="/assets/image/install_openjdk.png" alt="install_openjdk">
<br/>

### 2. mysql 셋팅
2-1. 본인의 컴퓨터의 시스템 환경설정에서 mysql가 설치되어 있는지 확인
<img src="/assets/image/uninstall_mysql.png" alt="uninstall_mysql">
<br/>
2-2. 해당 url([mysql])에서 본인의 os 환경에 맞는 제품 선택
<img src="/assets/image/install_mysql_url.png" alt="install_mysql_url">
<br/>
2-3. 아래의 그림과 같이 다운로드 시작
<img src="/assets/image/download_check.png" alt="download_check">
<br/>
2-4. 아래의 그림과 install 방법을 순서대로 진행
<img src="/assets/image/install_mysql_0.png" alt="install_mysql_0">
<br/>
<img src="/assets/image/install_mysql_1.png" alt="install_mysql_1">
<br/>
<img src="/assets/image/install_mysql_2.png" alt="install_mysql_2">
<br/>
<img src="/assets/image/install_mysql_3.png" alt="install_mysql_3">
<br/>
<img src="/assets/image/install_mysql_4.png" alt="install_mysql_4">
<br/>
아래의 이미지와 같이 password를 잘 기억해 두시기 바랍니다.
<img src="/assets/image/install_mysql_5.png" alt="install_mysql_5">
<br/>
<img src="/assets/image/install_mysql_6.png" alt="install_mysql_6">
<br/>
설치 확인 후, 아래의 그림과 같이 시스템 환결설정에 mysql이 보입니다.
<img src="/assets/image/install_success.png" alt="install_success">
<br/>
2-5. terminal 환경에서 mysql 확인 하기
<img src="/assets/image/mysql_confirm.png" alt="mysql_confirm">
<br/>
terminal 환경에서 아래와 같이 실행 후, 첫번째 비밀 번호는 sudo 비밀번호를 입력후, 두번째 비밀번호는 설치과정에서 password 입력한 password 입력
```
cd /usr/local/mysql/bin/
sudo ./mysql -u root -p
```
정상 접속 되었으면, 현재 database 를 show 해보겠습니다.
```
show databases;
```
database 목록들이 나열되었으면, mysql의 DB를 선택해 봅시다.
```
use mysql;
```
우린 이제 mysql database를 선택 한 상태입니다.
mysql 에는 현재 무슨 table이 존재하는 show 해보겠습니다.
```
show tables;
```
우리는 이제 java와 database를 정상적으로 셋팅 하였습니다.
앞으로 우리의 database를 생성 할 것이며, table을 설계할 것 입니다.
또한 terminal 환경이 아닌 보다 편한 개발을 위한 통합개발환경(IDE)를 설치 할 것 이며, DBMS에 쉽게 쿼리를 던질 수 있는 Tool 이 많이 있는데, 이 중 Toad for mySQL을 사용하여 DB에 접속 하도록 하겠습니다.
글이 너무 길어지는 관계로 다음 블로그를 통해 확인 바랍니다.

[Docker]: https://www.docker.com/
[Openjdk]: https://jdk.java.net/archive/
[mysql]: https://dev.mysql.com/downloads/mysql/
