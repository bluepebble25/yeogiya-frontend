# yeogiya-frontend

## 프론트엔드 기술 스택
- Language and Framework: React + Typescript
- Libraries: emotion, material ui, storybook
- CI/CD : github actions (검토 중)
- ETC: Jira, Slack, Notion, Figma

## Git Flow
1. upstream을 fork
2. local에서 remote origin으로 업로드
3. origin에서 upstream으로 pr, 코드리뷰
4. upstream devleop에서 기능 완성 시 main에 머지

## Commit Convention
gitmoji + 작업한 위치, 내용

## Branch Convention 
- `main` : 배포용 브랜치
- `develop`: 기능 단위 완성용 브랜치
- `feature`: 기능 개발용 브랜치
    - feature/지라이슈-기능명

## Coding Convention 
- eslint
    - react default 설정 사용
    - tab 들여쓰기 통일
- component
    - 대문자로 시작
    - 함수형 컴포넌트 사용 (화살표 함수 컴포넌트 X)