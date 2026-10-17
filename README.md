# 배움곳 · 한글날 배움터

중·고등학생이 PC에서 개별 체험하는 국어 프로그램 허브입니다. 첫 프로그램은 ‘1443년 창제 목적 → 1446년 한글 조합 → 오늘의 한글날·맞춤법’ 시간여행 게임입니다.

## 실행

Node.js 22.12 이상과 pnpm을 사용할 수 있는 환경에서 이 폴더를 엽니다.

```powershell
pnpm install
pnpm dev
```

터미널에 나온 localhost 주소를 브라우저에서 엽니다. 실행 중인 터미널을 닫으면 서버가 종료됩니다.

```powershell
pnpm test
pnpm build
pnpm preview
```

배포 파일은 dist에 생성됩니다. 게임은 브라우저에서 계산하며 서비스용 서버·DB·로그인이 없습니다. 학생의 답과 점수는 메모리에서만 유지되고, 새로고침·허브 귀환 시 초기화됩니다. 개발 도구는 패키지를 처음 설치할 때 인터넷이 필요합니다.

## 파일 안내

- SPEC.md: 확정 요구사항·가정·검증 조건·단계별 구현 프롬프트
- src/content.js: 프로그램 목록, 퀴즈, 한글 자모 및 조합 함수
- src/main.jsx: 허브·소개·시간여행 게임
- src/style.css: 기본 스타일 및 PDF 도구
- src/final-theme.css: DESIGN.md에 맞춘 최종 파스텔·스티커 디자인
- tests/content.test.js: 한글 계산과 콘텐츠 검증

## 다음 프로그램 추가

1. src/content.js의 programs에 고유 id·title·category·description·duration·status를 추가합니다.
2. src/main.jsx에 앱 컴포넌트를 만들고 App의 screen 분기와 카드 실행 버튼을 해당 id에 연결합니다. 현재 첫 앱 버튼은 game 화면에 연결되어 있으므로 새 앱 추가 시 프로그램별 분기를 함께 수정해야 합니다.
3. 허브→새 앱→허브 이동 및 기존 게임을 확인하고 다시 빌드합니다.

현재 허브 이름 ‘배움곳’은 가칭입니다. DESIGN.md 원본은 수정하지 않았습니다. 외부 글꼴·이미지·분석 기능을 불러오지 않습니다. 역사적 대화는 창작이며 학습 내용은 수업 전에 교사가 검토하세요.


