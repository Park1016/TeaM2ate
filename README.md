# TeaM2ate

✈ TeaM2ate는 개발프로젝트를 만들 때 함께할 팀원을 찾을 수 있는 팀원찾기 플랫폼입니다.

[사이트 보러가기](http://13.124.248.247:8080)
- 테스트 계정 <br>
아이디 : test <br>
비밀번호 : 0000

<br>

## 목차

1. [팀원 소개](#1)
2. [기술 스택](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [프로젝트 기능 설명](#5)
6. [버그](#6)
7. [아쉬운 점 / 개선할 점](#7)

<br>

## 1. 팀원 <a id="1"></a>

- 박현정


<br>

## 2. 기술 스택 <a id="2"></a>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=recoil&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-a88bd6?style=for-the-badge&logo=node.js&logoColor=black">
<img src="https://img.shields.io/badge/Express-DB7093?style=for-the-badge&logo=express&logoColor=black">
<img src="https://img.shields.io/badge/Scss-FFCA28?style=for-the-badge&logo=scss&logoColor=black">
<img src="https://img.shields.io/badge/aws-9bbf88?style=for-the-badge&logo=aws&logoColor=black">

<br>
<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

### server와 client를 실행할 수 있는 터미널이 필요합니다
#### git clone 후
- server
```
$ cd server
$ npm run dev
```
- client
```
$ cd client
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>


### Client
```
📦src
 ┣ 📂api
 ┃ ┣ 📜board.js
 ┃ ┣ 📜comment.js
 ┃ ┣ 📜csrf.js
 ┃ ┣ 📜post.js
 ┃ ┣ 📜replycomm.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜writesample.js
 ┣ 📂components
 ┃ ┣ 📂Alert
 ┃ ┃ ┣ 📜Alert.jsx
 ┃ ┃ ┗ 📜Alert.module.scss
 ┃ ┣ 📂Bookmark
 ┃ ┃ ┣ 📜Bookmark.jsx
 ┃ ┃ ┗ 📜Bookmark.module.scss
 ┃ ┣ 📂CertEmail
 ┃ ┃ ┣ 📜CertEmail.jsx
 ┃ ┃ ┗ 📜CertEmail.module.scss
 ┃ ┣ 📂CheckPw
 ┃ ┃ ┣ 📜CheckPw.jsx
 ┃ ┃ ┗ 📜CheckPw.module.scss
 ┃ ┣ 📂ChooseBox
 ┃ ┃ ┣ 📜ChooseBox.jsx
 ┃ ┃ ┗ 📜ChooseBox.module.scss
 ┃ ┣ 📂CommonBtn
 ┃ ┃ ┣ 📜CommonBtn.jsx
 ┃ ┃ ┗ 📜CommonBtn.module.scss
 ┃ ┣ 📂Error
 ┃ ┃ ┣ 📜Error.jsx
 ┃ ┃ ┗ 📜Error.module.scss
 ┃ ┣ 📂Filter
 ┃ ┃ ┣ 📜Filter.jsx
 ┃ ┃ ┗ 📜Filter.module.scss
 ┃ ┣ 📂HeaderSearch
 ┃ ┃ ┣ 📜HeaderSearch.jsx
 ┃ ┃ ┗ 📜HeaderSearch.module.scss
 ┃ ┣ 📂Input
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗ 📜Input.module.scss
 ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📜Loading.jsx
 ┃ ┃ ┗ 📜Loading.module.scss
 ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📜Logo.jsx
 ┃ ┃ ┗ 📜Logo.module.scss
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┗ 📜Modal.module.scss
 ┃ ┣ 📂ProfilePhoto
 ┃ ┃ ┣ 📜ProfilePhoto.jsx
 ┃ ┃ ┗ 📜ProfilePhoto.module.scss
 ┃ ┣ 📂ProfileToggle
 ┃ ┃ ┣ 📜ProfileToggle.jsx
 ┃ ┃ ┗ 📜ProfileToggle.module.scss
 ┃ ┣ 📂SelectBox
 ┃ ┃ ┣ 📜SelectBox.jsx
 ┃ ┃ ┗ 📜SelectBox.module.scss
 ┃ ┣ 📂SelectTag
 ┃ ┃ ┣ 📜SelectTag.jsx
 ┃ ┃ ┗ 📜SelectTag.module.scss
 ┃ ┣ 📂Textarea
 ┃ ┃ ┣ 📜Textarea.jsx
 ┃ ┃ ┗ 📜Textarea.module.scss
 ┃ ┣ 📂TextEditor
 ┃ ┃ ┣ 📜TextEditor.jsx
 ┃ ┃ ┗ 📜TextEditor.module.scss
 ┃ ┣ 📂Time
 ┃ ┃ ┣ 📜Time.jsx
 ┃ ┃ ┗ 📜Time.module.scss
 ┃ ┣ 📂Timer
 ┃ ┃ ┣ 📜Timer.jsx
 ┃ ┃ ┗ 📜Timer.module.scss
 ┃ ┣ 📂Top
 ┃ ┃ ┣ 📜Top.jsx
 ┃ ┃ ┗ 📜Top.module.scss
 ┃ ┣ 📂UpdateDelBtn
 ┃ ┃ ┣ 📜UpdateDelBtn.jsx
 ┃ ┃ ┗ 📜UpdateDelBtn.module.scss
 ┃ ┗ 📂Username
 ┃ ┃ ┣ 📜Username.jsx
 ┃ ┃ ┗ 📜Username.module.scss
 ┣ 📂containers
 ┃ ┣ 📂Aside
 ┃ ┃ ┣ 📜Aside.jsx
 ┃ ┃ ┗ 📜Aside.module.scss
 ┃ ┣ 📂AsideLeft
 ┃ ┃ ┣ 📜AsideLeft.jsx
 ┃ ┃ ┗ 📜AsideLeft.module.scss
 ┃ ┣ 📂AsideRight
 ┃ ┃ ┣ 📜AsideRight.jsx
 ┃ ┃ ┗ 📜AsideRight.module.scss
 ┃ ┣ 📂Board
 ┃ ┃ ┣ 📜Board.jsx
 ┃ ┃ ┗ 📜Board.module.scss
 ┃ ┣ 📂BoardPost
 ┃ ┃ ┣ 📜BoardPost.jsx
 ┃ ┃ ┗ 📜BoardPost.module.scss
 ┃ ┣ 📂Comment
 ┃ ┃ ┣ 📜Comment.jsx
 ┃ ┃ ┗ 📜Comment.module.scss
 ┃ ┣ 📂CommentContent
 ┃ ┃ ┣ 📜CommentContent.jsx
 ┃ ┃ ┗ 📜CommentContent.module.scss
 ┃ ┣ 📂CommentWrite
 ┃ ┃ ┣ 📜CommentWrite.jsx
 ┃ ┃ ┗ 📜CommentWrite.module.scss
 ┃ ┣ 📂DeleteUser
 ┃ ┃ ┣ 📜DeleteUser.jsx
 ┃ ┃ ┗ 📜DeleteUser.module.scss
 ┃ ┣ 📂EditType
 ┃ ┃ ┣ 📜EditType.jsx
 ┃ ┃ ┗ 📜EditType.module.scss
 ┃ ┣ 📂FindAuth
 ┃ ┃ ┣ 📜FindAuth.jsx
 ┃ ┃ ┗ 📜FindAuth.module.scss
 ┃ ┣ 📂FindPw
 ┃ ┃ ┣ 📜FindPw.jsx
 ┃ ┃ ┗ 📜FindPw.module.scss
 ┃ ┣ 📂FramePost
 ┃ ┃ ┣ 📜FramePost.jsx
 ┃ ┃ ┗ 📜FramePost.module.scss
 ┃ ┣ 📂FrameType
 ┃ ┃ ┣ 📜FrameType.jsx
 ┃ ┃ ┗ 📜FrameType.module.scss
 ┃ ┣ 📂FrameWrite
 ┃ ┃ ┣ 📜FrameWrite.jsx
 ┃ ┃ ┗ 📜FrameWrite.module.scss
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.scss
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Login.module.scss
 ┃ ┣ 📂LoginForm
 ┃ ┃ ┣ 📜LoginForm.jsx
 ┃ ┃ ┗ 📜LoginForm.module.scss
 ┃ ┣ 📂Replycomm
 ┃ ┃ ┣ 📜Replycomm.jsx
 ┃ ┃ ┗ 📜Replycomm.module.scss
 ┃ ┣ 📂ReplycommWrite
 ┃ ┃ ┣ 📜ReplycommWrite.jsx
 ┃ ┃ ┗ 📜ReplycommWrite.module.scss
 ┃ ┣ 📂Security
 ┃ ┃ ┣ 📜Security.jsx
 ┃ ┃ ┗ 📜Security.module.scss
 ┃ ┣ 📂SettingContent
 ┃ ┃ ┣ 📜SettingContent.jsx
 ┃ ┃ ┗ 📜SettingContent.module.scss
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜SignUp.jsx
 ┃ ┃ ┗ 📜SignUp.module.scss
 ┃ ┣ 📂SignUpForm
 ┃ ┃ ┣ 📜SignUpForm.jsx
 ┃ ┃ ┗ 📜SignUpForm.module.scss
 ┃ ┣ 📂Type
 ┃ ┃ ┣ 📜Type.jsx
 ┃ ┃ ┗ 📜Type.module.scss
 ┃ ┣ 📂UpdateProfile
 ┃ ┃ ┣ 📜UpdateProfile.jsx
 ┃ ┃ ┗ 📜UpdateProfile.module.scss
 ┃ ┣ 📂UpdatePw
 ┃ ┃ ┣ 📜UpdatePw.jsx
 ┃ ┃ ┗ 📜UpdatePw.module.scss
 ┃ ┗ 📂UserPage
 ┃ ┃ ┣ 📜UserPage.jsx
 ┃ ┃ ┗ 📜UserPage.module.scss
 ┣ 📂hooks
 ┃ ┣ 📜certEmail.jsx
 ┃ ┣ 📜formatChecker.js
 ┃ ┣ 📜getDate.js
 ┃ ┣ 📜makeFormData.js
 ┃ ┣ 📜timeCalculate.js
 ┃ ┣ 📜useCheckAuth.jsx
 ┃ ┣ 📜useCheckPageOut.js
 ┃ ┣ 📜useFilterSearch.jsx
 ┃ ┗ 📜useShowTag.jsx
 ┣ 📂network
 ┃ ┗ 📜http.js
 ┣ 📂pages
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜Main.module.scss
 ┃ ┣ 📂Mypage
 ┃ ┃ ┣ 📜Mypage.jsx
 ┃ ┃ ┗ 📜Mypage.module.scss
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜NotFound.module.scss
 ┃ ┣ 📂Post
 ┃ ┃ ┣ 📜Post.jsx
 ┃ ┃ ┗ 📜Post.module.scss
 ┃ ┣ 📂Setting
 ┃ ┃ ┣ 📜Setting.jsx
 ┃ ┃ ┗ 📜Setting.module.scss
 ┃ ┣ 📂UpdatePost
 ┃ ┃ ┣ 📜UpdatePost.jsx
 ┃ ┃ ┗ 📜UpdatePost.module.scss
 ┃ ┣ 📂User
 ┃ ┃ ┣ 📜User.jsx
 ┃ ┃ ┗ 📜User.module.scss
 ┃ ┗ 📂WritePost
 ┃ ┃ ┣ 📜WritePost.jsx
 ┃ ┃ ┗ 📜WritePost.module.scss
 ┣ 📂state
 ┃ ┣ 📜auth.jsx
 ┃ ┣ 📜comment.jsx
 ┃ ┣ 📜http.jsx
 ┃ ┣ 📜local.jsx
 ┃ ┣ 📜modal.jsx
 ┃ ┗ 📜user.jsx
 ┣ 📂static
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂images
 ┃ ┣ 📂font
 ┃ ┗ 📂stylesheets
 ┃ ┃ ┗ 📂lib
 ┃ ┃ ┃ ┣ 📜_mixin.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┣ 📜App.css
 ┣ 📜App.js
 ┗ 📜index.js
```

### Server
```
📦server
 ┣ 📂data
 ┃ ┣ 📜board.js
 ┃ ┣ 📜comment.js
 ┃ ┣ 📜email.js
 ┃ ┣ 📜photo.js
 ┃ ┣ 📜post.js
 ┃ ┣ 📜replycomm.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜writesample.js
 ┣ 📂db
 ┃ ┗ 📜database.js
 ┣ 📂middleware
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜csrf.js
 ┃ ┣ 📜rateLimit.js
 ┃ ┗ 📜validation.js
 ┣ 📂router
 ┃ ┣ 📜board.js
 ┃ ┣ 📜comment.js
 ┃ ┣ 📜post.js
 ┃ ┣ 📜replycomm.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜writesample.js
 ┣ 📜app.js
 ┣ 📜congif.js
 
```

<br />

## 5. 프로젝트 기능 설명 <a id="5"></a>

<hr />

### 시연영상

https://www.youtube.com/watch?v=4KF6Pj0mOOU

### 로그인

<details>
  <summary>상세보기</summary>

#### 회원가입/로그인

![1_회원가입로그인](https://user-images.githubusercontent.com/76847993/218349101-4bf818ab-261a-4b88-93ca-97eebd55a043.gif)

</details>
  
### 글 쓰기
  
<details>
  <summary>상세보기</summary>

![2_글쓰기!](https://user-images.githubusercontent.com/76847993/218349119-57465367-75bc-40cb-b8da-985beb7c79f5.gif)

</details>

### 글 수정

<details>
  <summary>상세보기</summary>

![3_글수정](https://user-images.githubusercontent.com/76847993/218349132-68319514-f711-455c-888b-c79fb94235bf.gif)

</details>

### 댓글

<details>
  <summary>상세보기</summary>
  
![4_댓글1](https://user-images.githubusercontent.com/76847993/218349746-fa834c45-7090-4cfa-87ad-cbcf7efe3281.gif)
![4_댓글2](https://user-images.githubusercontent.com/76847993/218349749-1c710aaa-845c-473b-b4ba-255294bae969.gif)

</details>


### 게시글 삭제

<details>
  <summary>상세보기</summary>

![5_게시글삭제](https://user-images.githubusercontent.com/76847993/218349766-ffa97bc7-606b-4e89-9638-1741fe7f5aed.gif)

</details>
  
### 검색
  
<details>
  <summary>상세보기</summary>

![6_메인화면검색](https://user-images.githubusercontent.com/76847993/218349811-c05351b8-857a-498f-83d8-8234f4e07bdb.gif)

</details>

  
### 마이페이지
    
<details>
  <summary>상세보기</summary>

![7_마이페이지1](https://user-images.githubusercontent.com/76847993/218349816-5dad2e6b-1f85-4f37-bec0-cab186786354.gif)
![8_마이페이지2](https://user-images.githubusercontent.com/76847993/218349821-00d3e79c-4385-4a6c-ba55-e7ab48e2f873.gif)

</details>


### 비밀번호 변경

<details>
  <summary>상세보기</summary>

![9_비번변경](https://user-images.githubusercontent.com/76847993/218349822-f99127d1-ad5a-4c45-9253-358a85c53de1.gif)

</details>

  
### 비밀번호 찾기
 
<details>
  <summary>상세보기</summary>

![10_비번찾기](https://user-images.githubusercontent.com/76847993/218349825-1e393d56-9e81-4676-912b-27b0eb2529a1.gif)

</details>

  
### 회원탈퇴

<details>
  <summary>상세보기</summary>

![11_회원탈퇴](https://user-images.githubusercontent.com/76847993/218349827-9859cd4a-3863-467d-9265-12cac0533e1b.gif)

</details>

  
### 비로그인 시

<details>
  <summary>상세보기</summary>

![12_비로그인](https://user-images.githubusercontent.com/76847993/218349830-ab9752a0-de72-4496-b435-8c838980ccf5.gif)

</details>

  
### 반응형

<details>
  <summary>상세보기</summary>

![13_반응형1](https://user-images.githubusercontent.com/76847993/218349877-605fe580-c59d-46e3-b020-188611fb78c2.gif)
![13_반응형2](https://user-images.githubusercontent.com/76847993/218349883-6f001fa4-b4fa-461a-a8d6-7f78239341c7.gif)
![13_반응형3](https://user-images.githubusercontent.com/76847993/218349887-d545592b-a418-48bf-8cda-8f4be9d21052.gif)
![13_반응형4](https://user-images.githubusercontent.com/76847993/218349891-00bd25e9-02b4-472c-aa92-01dca3287c9e.gif)
![13_반응형5](https://user-images.githubusercontent.com/76847993/218349896-e52d4725-3308-47cd-bd94-a713b2e7fdd1.gif)

</details>


</details>

<hr />

## 6. 버그 <a id="6"></a>

##### 1. 메인화면 제외 새로고침 시 페이지 못찾음
##### 2. 유저 클릭 시 전에 클릭되었던 유저에 대한 정보가 뜬 후 지금 누른 유저에 대한 정보가 뜸

<br>

## 7. 아쉬운 점 / 개선할 점 <a id="7"></a>

<table class="table">
  <tr>
    <td class="title left">아쉬운 점</td>
    <td class="title right">개선할 점</td>
  </tr>
  <tr>
    <td>https환경으로 배포하지 못해 포트포워딩을 하지 못하고 ip주소로 배포가 되었습니다.</td>
    <td>aws ssl인증 관련 및 aws에 대한 전반적인 공부가 필요하다고 느꼈습니다.</td>
  </tr>
  <tr>
    <td>rest api uri규칙을 엄격하게 준수하지 않았습니다.</td>
    <td>앞으로의 프로젝트에서는 협업의 효율성을 위해 rest api uri규칙을 준수하여 설계할 것 입니다.</td>
  </tr>
  <tr>
    <td>이미지 업로드를 구현하지 못했습니다.</td>
    <td>aws s3을 이용하여 이미지 업로드하는 방법을 공부할 것 입니다.</td>
  </tr>
  <tr>
    <td>sns로 회원가입을 구현하지 못했습니다.</td>
    <td>token을 기반으로 하는 회원가입 프로세스와 oauth에 대한 공부가 필요합니다.</td>
  </tr>
</table>
