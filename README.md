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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d67c72b-ee2b-4484-bad1-c02f569936a6/Untitled.png)

### 2. 로그인 페이지

- 아이디와 비밀번호를 입력하여 로그인을 진행합니다.
- 아직 비회원일 시 ‘회원가입’ 버튼을 통해 회원가입 페이지로 이동할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83c128e5-5f33-4715-8b08-453750d1e11c/Untitled.png)

### 3. 회원가입 페이지

- 아이디, 비밀번호, 이름, 이메일을 입력하여 회원가입을 진행할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6038c4f5-dd1b-4a00-99a4-e0edbedfd932/Untitled.png)

### 4. 글 목록 페이지

- 비 로그인 시에도 게시물 목록 페이지를 조회할 수 있습니다.
- 검색 시 [제목, 내용, 작성자] 조건과 키워드를 조합하여 조회할 수 있습니다.
- 페이징 처리를 하여 화면에서 10개의 게시물만 최신 등록순으로 조회되고 페이지 번호를 통해 이전 등록된 게시물들을 조회할 수 있습니다.
- 마찬가지로 글쓰기 기능은 로그인 후에만 가능하므로 비 로그인 시 로그인 화면으로 이동합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/930ceac0-b2f9-4c72-a430-fa5b579e247e/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4f056ee-7129-4c03-a329-2b6637dfcf9b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/60feaca8-b882-4553-9b2f-ae480535d7ab/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80f70f1b-4759-4bc6-a67c-9a940c2d2564/Untitled.png)

### 5. 게시물 작성 페이지

- 제목과 내용 입력 후 게시물을 등록할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/132c9f3f-eba1-4b80-99bc-f38aad1fe236/Untitled.png)

### 6. 게시물 상세 페이지

- 작성자 아이디, 제목, 작성시간, 내용을 상세 조회할 수 있습니다.
- ‘뒤로가기’ 버튼을 통해 이전 페이지로 이동할 수 있습니다.
- 본인이 작성한 글만 ‘수정’ 및 ‘삭제’ 버튼을 통해 수정할 수 있습니다.
- 게시물에 대한 댓글을 남길 수 있습니다.
- 하단에는 해당 게시물에 달린 댓글 목록을 조회할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e6261bb-192a-4fa1-a1a8-51a0b9316b41/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cc5123a-ffbb-480c-b762-302ee8c95004/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cf0d56d-fab5-4a02-8e1b-415bd9e7d1b8/Untitled.png)

### 7. 게시물 수정 페이지

- 본인이 작성한 게시물의 제목과 내용을 수정할 수 있습니다.
