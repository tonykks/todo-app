# Todo App

HTML, CSS, Vanilla JavaScript, Tailwind CDN으로 만든 간단한 Todo App입니다.

## 사용 기술

- HTML
- CSS
- Vanilla JavaScript
- Tailwind CDN

## 주요 기능

- Todo 추가
- Enter 키로 추가
- 빈 값 방지
- Todo 목록 표시
- 완료/미완료 변경
- Todo 삭제
- Total / Completed / Remaining 개수 표시
- localStorage 저장으로 새로고침 후 유지

## 실행 방법

`index.html`을 브라우저에서 직접 열거나 VS Code Live Server로 실행합니다.

## AI 활용 기록

### 1차 요청: 화면 구조 생성

Vanilla JavaScript Todo 앱의 기본 화면 구조를 만들어 주세요.  
입력창, 추가 버튼, Todo 목록 영역, 상태 요약 영역을 만들고 Tailwind CDN과 app.js를 연결해 주세요.

### 2차 요청: Todo 추가 기능 구현

Add 버튼 클릭과 Enter 키 입력으로 Todo가 추가되도록 구현해 주세요.  
빈 값은 추가하지 않고, todoItemList 배열과 renderTodos() 함수를 사용해 주세요.

### 3차 요청: 완료/삭제 기능 구현

각 Todo 항목에 체크박스와 삭제 버튼을 추가해 주세요.  
체크박스로 완료/미완료를 변경하고, 삭제 버튼으로 항목을 제거해 주세요.

### 4차 요청: localStorage 저장 기능 구현

새로고침 후에도 Todo 목록과 완료 상태가 유지되도록 localStorage 저장 기능을 추가해 주세요.  
JSON.stringify()와 JSON.parse()를 사용해 주세요.

## 배운 점

- HTML 요소를 JavaScript에서 DOM으로 선택하는 흐름을 확인했습니다.
- 버튼 클릭과 Enter 키 입력을 이벤트로 연결하는 방식을 경험했습니다.
- Todo를 배열과 객체로 관리하는 구조를 확인했습니다.
- 데이터가 바뀐 뒤 `renderTodos()`로 화면을 다시 그리는 흐름을 이해했습니다.
- `JSON.stringify()` / `JSON.parse()`를 사용해 localStorage에 데이터를 저장하고 복원하는 방식을 확인했습니다.
- 아직 JavaScript 문법과 함수 구조는 학습 중이지만, AI 에이전트를 활용해 기능 단위로 구현하고 테스트하는 과정을 경험했습니다.