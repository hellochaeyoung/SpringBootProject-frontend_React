---
layout: post
title: "프로젝트 README 작성"
date: 2022-08-08 15:40
background: 
tag: [Github io, Notion]
---


# 게시판 구현 프로젝트

# [개요]

- Spring Boot와 React를 활용하여 게시판을 구현해보는 프로젝트를 진행

# [기술 스택]

- FrontEnd : React(Javascript, HTML, CSS), Axios
- BackEnd : Spring Boot, JAVA, MyBatis
- Database : MySQL
- SCM : Git
- IDE : Intellij, VSCode

# [구현 페이지]

### 1. 메인 페이지

- 상단의 메뉴 또는 메인의 버튼을 통해 글 목록 또는 글쓰기 페이지로 이동할 수 있습니다.
- 글쓰기 기능은 로그인 후에만 사용 가능하므로 비로그인 시 로그인 페이지로 이동합니다.

![Untitled](https://user-images.githubusercontent.com/55968079/183355841-1a62d90a-3425-4094-8715-ffd185a4dd1f.png)


### 2. 로그인 페이지

- 아이디와 비밀번호를 입력하여 로그인을 진행합니다.
- 아직 비회원일 시 ‘회원가입’ 버튼을 통해 회원가입 페이지로 이동할 수 있습니다.

![Untitled 1](https://user-images.githubusercontent.com/55968079/183355498-6229bf42-6d4f-44ff-8d26-724b08191943.png)



### 3. 회원가입 페이지

- 아이디, 비밀번호, 이름, 이메일을 입력하여 회원가입을 진행할 수 있습니다.

![Untitled 2](https://user-images.githubusercontent.com/55968079/183355538-d9c9002f-1f7a-43d1-a4ff-a32be390bed7.png)



### 4. 글 목록 페이지

- 비 로그인 시에도 게시물 목록 페이지를 조회할 수 있습니다.
- 검색 시 [제목, 내용, 작성자] 조건과 키워드를 조합하여 조회할 수 있습니다.
- 페이징 처리를 하여 화면에서 10개의 게시물만 최신 등록순으로 조회되고 페이지 번호를 통해 이전 등록된 게시물들을 조회할 수 있습니다.
- 마찬가지로 글쓰기 기능은 로그인 후에만 가능하므로 비 로그인 시 로그인 화면으로 이동합니다.

![Untitled 3](https://user-images.githubusercontent.com/55968079/183355651-b8f6958d-716b-43ac-8e93-2b3ca2f6065d.png)
![Untitled 4](https://user-images.githubusercontent.com/55968079/183355700-1118be6c-1f09-45ab-bbc9-80cefeea8dfd.png)
![Untitled 5](https://user-images.githubusercontent.com/55968079/183355713-35782d72-0142-4920-9162-bd8ba844bdd8.png)
![Untitled 6](https://user-images.githubusercontent.com/55968079/183355723-40482520-afdd-4af8-a485-89ccd08a62cc.png)



### 5. 게시물 작성 페이지

- 제목과 내용 입력 후 게시물을 등록할 수 있습니다.

![Untitled 7](https://user-images.githubusercontent.com/55968079/183355733-aa97280a-439a-4f69-b175-f41e4194d508.png)


### 6. 게시물 상세 페이지

- 작성자 아이디, 제목, 작성시간, 내용을 상세 조회할 수 있습니다.
- ‘뒤로가기’ 버튼을 통해 이전 페이지로 이동할 수 있습니다.
- 본인이 작성한 글만 ‘수정’ 및 ‘삭제’ 버튼을 통해 수정할 수 있습니다.
- 게시물에 대한 댓글을 남길 수 있습니다.
- 하단에는 해당 게시물에 달린 댓글 목록을 조회할 수 있습니다.

![Untitled 8](https://user-images.githubusercontent.com/55968079/183356124-e0a5716f-d6de-487f-ad0a-4438faa40f71.png)
![Untitled 9](https://user-images.githubusercontent.com/55968079/183356119-0365ebe3-bb21-4064-ab4b-b1f185e0c02a.png)
![Untitled 10](https://user-images.githubusercontent.com/55968079/183356123-5ff130dd-7e06-40e7-9ab8-a97910227ceb.png)



### 7. 게시물 수정 페이지

- 본인이 작성한 게시물의 제목과 내용을 수정할 수 있습니다.

![Untitled 11](https://user-images.githubusercontent.com/55968079/183356162-5b1603ce-1526-4627-a46c-c0f2bb2e1b7a.png)

