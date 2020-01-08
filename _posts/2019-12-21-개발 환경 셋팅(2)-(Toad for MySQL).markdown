---
layout: post
title:  "개발 환경 셋팅(Toad for MySQL)"
date:   2019-12-21 19:11:21 +1930
comments: true
---
<br/>

지난 블로그에서 작성한 내용을 이어서 이번 블로그에서는 mysql을 편리하게 작성하고 운영 할 수 있는 [Toad for MySQL]에 대한 글을 작성 하겠습니다.<br/>

### Toad for MySQL 설치
 1. 설치 URL ([Download])<br/>
 아래의 이미지와 같이 해당 Toad Edge 선택을 합니다.
 <img src="/assets/image/04/download_url.png" alt="download_url">
 <br/>
 2. Freeware로 선택 하여 다운로드<br/>
 <img src="/assets/image/04/select_product.png" alt="select_product">
 <br/>
 3. 간단한 Information 작성<br/>
 다운로드 하기 전에 간단한 개인정보를 입력하면 다운로드가 진행 됩니다.
 <img src="/assets/image/04/validation.png" alt="validation">
 <br/>
 4. 설치 과정<br/>
 <img src="/assets/image/04/setup_1.png" alt="setup_1">
 <img src="/assets/image/04/setup_2.png" alt="setup_2">
 <img src="/assets/image/04/setup_3.png" alt="setup_3">
 <img src="/assets/image/04/setup_4.png" alt="setup_4">
 <img src="/assets/image/04/setup_5.png" alt="setup_5">
 <br/>
 5. New Connection<br/>
 mysql 설치 과정에서 root의 비밀번호를 입력하고 간단 아래의 이미지와 같이
 입력 해주시면 됩니다.
 <img src="/assets/image/04/create.png" alt="create">
 <br/>
 6. 성공<br/>
 정상적으로 Connection이 성공 하였으면, 우리는 Terminal 환경에서
 테스트 해보았던 내용을 이제는 간편한 Tool에서 똑같이 테스트 해볼 수 있는 있을 것 입니다.
 <img src="/assets/image/04/use.png" alt="use">
 <br/>

우리는 이제 개발에 필요한 개발환경을 완료 하였습니다. Java 개발 툴인 eclipse 또는 intellij는 너무도 많고 잘 정리되어 있는 블로그가 많기 때문에
생략 하도록 하겠습니다. 참고로 필자는 현재 intellij를 사용 하고 있습니다.<br/>
다음 시간에는 이제 개발 환경 셋팅이 완료 되었으니, 프로그래밍의 가장 기본이 되는 테스트 코드인 게시판을 Java(Spring boot, JPA)를 사용 하여 진행하도록 해보겠습니다.

[toad for mysql]: http://www.toadworld.com/
[Download]: https://www.toadworld.com/downloads#mysql
