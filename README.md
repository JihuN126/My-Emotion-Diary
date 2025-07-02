# 📝 My Emotion Diary

감정 기반 일기를 기록하고 관리할 수 있는 React 기반 SPA 프로젝트입니다.  
페이지 라우팅, 상태 관리, 컴포넌트 재사용, 로컬스토리지 저장 등 실제 웹 서비스에 필요한 다양한 기능을 직접 구현했습니다.

## 📷 Preview
![image](https://github.com/user-attachments/assets/3ddeed1d-4cdf-4d7a-97fa-c3e95d2a4520)
![image](https://github.com/user-attachments/assets/3582b98c-27d9-4580-8c25-f62c1c3e8378)


---

## 📁 기능 소개

### 📆 메인(Home) 페이지
- 오늘의 날짜와 감정 일기 목록 확인
- 감정별 컬러 표시 및 필터링 기능
- 일기 등록/수정/삭제 버튼 제공

### 📝 일기 작성(New) 페이지
- 날짜 선택
- 감정 선택 (아이콘과 컬러)
- 텍스트 작성
- 로컬스토리지 저장

### 📖 일기 상세(Diary) 페이지
- 선택한 일기의 상세 보기
- 감정 이미지 및 텍스트 렌더링

### ✏️ 일기 수정(Edit) 페이지
- 기존 일기 내용 불러오기
- 수정 후 저장 가능

---

## 🛠 사용 기술

### 📌 React 기능
- `useState` : 입력값 및 상태 관리
- `useRef` : 고유 ID 관리
- `useEffect` : 초기 데이터 로딩, 로컬스토리지 연동
- `useContext` + `createContext` : 전역 상태 관리
- `useNavigate`, `useParams` : 페이지 이동 및 URL 파라미터
- `useReducer` : 일기 데이터 CRUD 처리
- 커스텀 훅: `useDiary`, `usePageTitle`

### 💾 데이터 저장
- `localStorage` 사용하여 새로고침해도 데이터 유지

### 🎨 스타일
- `EmotionItem`, `Button`, `Header` 등 공통 컴포넌트 구성
- 감정별 색상 지정, 반응형 UI 구성

---

## 🧠 배운 점

- React의 핵심 훅들 (`useState`, `useEffect`, `useContext`, `useReducer`)을 실제 프로젝트에 적용해보며 이해가 깊어졌습니다.
- 라우터를 통해 페이지를 나누고 URL 파라미터 기반의 동적 경로를 다뤄보았습니다.
- 컴포넌트를 분리하고 재사용하면서 유지보수가 쉬운 구조를 고민했습니다.
