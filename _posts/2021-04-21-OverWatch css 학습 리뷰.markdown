---
layout: post
title:  "OverWatch css 학습 리뷰"
date:   2021-04-21
comments: true
---
<br/>


<br/>
이번에 작성할 내용은 [HEROPY]님의 강의 내용 중 하나인 css를 학습한 내용에 대한 리뷰 입니다.
<br/>
### OverWatch 캐릭터 선택 화면
- - -
<img src="/assets/image/20210421/ow_0.png" alt="완성본">
<br/>
### 레이아웃 구성
- - -
<img src="/assets/image/20210421/ow_1.png" alt="레이아웃">
가장 먼저 레이아웃 구성은 아래와 같이 잡았습니다.<br/><br/>
body 영역(배경색: 핑크색)<br/>
class="container" 인 div 영역(배경색: 오렌지색)<br/>
class="heroes" 인 div 영역(배경색: 파란색)<br/>
class="hero" 인 div 영역(배경색: 회색)<br/>
class="logo" 인 div 영역(배경색: 보라색)<br/>
<br/>
### body
- - -
```css
body {
  height: 100vh;
  background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```
<br />
<b>height: 100vh</b>는 body영역의 높이를 뷰포트(viewport) 높이(height)로 뷰포트의 높이에 비례하여 적용한다. 라는 뜻입니다. 자세한 내용은 [css 단위]를 참고해 주세요.<br />
<b>background-size</b>는 배경이미지의 크기를 조절합니다. 위의 url의 이미지 크기를 cover하겠다는 뜻으로 배경을 완전히 덮는다는 의미 입니다.<br />
<b>background-repeat</b>는 화면을 확대 할 경우 배경이미지가 반복적으로 출력되는 것에 대해 컨트롤 하는 것 입니다. 따라서 no-repeat를 해줌으로써 반복적으로 출력하지 않겠다는 의미입니다.<br />
<b>background-attachment</b>는 화면을 확대하여 스크롤이 생겼을 때 fixed를 하면 배경이미지를 움직이지 않고 고정(박는다)한다는 의미입니다.
<br/>
### class="container"
- - -
```css
.container {
  padding: 50px 0;
}
```
<br/>
container 클래스는 큰 의미가 없고 padding 값을 컨트롤 합니다. <br/>
padding: XX(위, 아래)px YY(왼쪽, 오른쪽)px을 의미합니다.
### class="heroes"
- - -
```css
.heroes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
}
```
<b>display: flex</b>는 레이아웃을 쉽게 구성하기 위한 방법으로 자세한 내용은 [HEROPY-Flex]님의 작성한 매우 자세히 설명한 글이 있으므로 참고 바랍니다.<br/>
<b>flex-wrap: wrap</b>은 해당 영역(div)를 래핑?하겠냐는 의미로 반응형 웹을 구현할 때 사용합니다. 브라우저의 width 값을 변경에 따라 아래의 이미지와 같이 출력되는 것(가로로 출력되는 수가 줄고 세로 출력되는 수가 늘어남)을 확인 할 수 있습니다.
<img src="/assets/image/20210421/ow_2.png" width=350 alt="레이아웃2">
<img src="/assets/image/20210421/ow_3.png" width=350 alt="레이아웃3"><br/>
<b>max-width</b>는 최대 width 너비를 뜻하고, <b>margin</b>은 중앙 정렬을 뜻 합니다.
<br/>
### class="hero"
- - -
```css
.hero {  
  width: 80px;
  height: 84px;
  margin: 4px;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #555555;
  border: 3px solid #ffffff;
  transform: skewX(-14deg);
  transition:
    transform .1s,
    background-color .6s
  ;
}

.hero:hover {  
  background-color: #ff9c00;
  transform: skewX(-14deg) scale(1.3);
  z-index: 1;
}

.hero .image {
  width: 140%;
  height: 100%;
  background-position: center;
  background-size: 90px;
  background-repeat: no-repeat;
  transform: skewX(14deg) translateX(-16px);
}

.heroes .hero:nth-child(1) .image {
  background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero1.png"); }
}
~
.heroes .hero:nth-child(32) .image {
  background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero32.png"); }
}
```
hero div은 캐릭터 하나 하나를 출력하는 영역 입니다.<br/>
여기서 중요하게 볼 항목은 <b>overflow</b>를 해줌으로써 해당 div영역에 이미지가 넘치지 않으며, <b>border-radius</b>로 모서리 부분을 둥글게 만들고 <b>transform</b>으로 기울기를 나타냈습니다.<br/>
또한 <b>transition</b>을 사용해서 1초 동안 크기가 변하고, 0.6초 동안 배경색을 변환하는 효과를 주었습니다. 그리고 마우스 hover(마우스를 해당영역 위로 올리면)를 할 경우, 배경색과 크기를 변환시켜 줍니다. 그리고 크기가 변환 될 때 가장 상위로 출력 되도록 <b>z-index</b>를 주었습니다.<br/>
<b>.heroes .hero:nth-child(n)</b>는 heroes div아래 hero형제 중 n번째 위치하는 요소 선택할 때 사용하는 의사클래스 입니다. 따라서 n번째 마다  해당 배경 이미지(오버워치 캐릭터)를 출력 해주고 있습니다.
<img src="/assets/image/20210421/ow_4.png" alt="레이아웃4">
<img src="/assets/image/20210421/ow_5.png" alt="레이아웃5">

<br/>
### class="logo"
- - -
```css
.logo {
  max-width: 300px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo img {
  width: 100%;
}
```
해당 css는 너비와 가운데 정렬을 시킨 후 해당 영역에 img를 넣어주는 코드 입니다. 특별히 어려운 것은 없습니다.
<br/>
### 정리
- - -
필자는 프론트엔드에 필요한 기술을 집중적으로 습득하고 있는 중 입니다. 필자가 처음 웹 개발을 했을 때 가장 기본인 html, css, javascript는 필요에 따라 구글링하여 즉각 처리하는 정도 였습니다. 정말 어리석었던 것 같습니다. 웹 개발을 주 기술로 밥벌이 하는 사람이 가장 기초 지식을 갈고 닦지 않고 지냈으니 말이죠...<br/>
어쩌면 구글링하여 즉각적으로 처리하는 것도 나쁜 방법은 아닐 수 있지만, 필자가 생각하기엔 그때 뿐 인 것 같습니다. 똑같은 문제가 발생 할 경우 아마 또 다시 구글링을 할 것 이며 똑같은 공수가 걸릴 것 입니다. 심지어 더 오래 걸릴 수도 있습니다. 처음에는 검색 키워드를 잘 잘성하여 바로 찾았지만 두번째는 그렇지 않을 수도 있기 때문이죠.. 그렇기 때문에 기초를 잘 다지는 것이 매우 중요하다고 생각합니다.<br/>
현재는 다시 처음부터 꼼꼼하게 어떠한 css 속성으로 화면이 정렬되고 배치 되는지에 대한 배움의 즐거움을 느끼며 열심히 학습하고 있습니다.


[HEROPY]: https://heropy.blog/
[css 단위]: https://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573
[HEROPY-Flex]: https://heropy.blog/2018/11/24/css-flexible-box/
