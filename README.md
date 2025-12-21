# 모바일 청첩장

전통혼례 분위기의 모바일 청첩장 웹사이트입니다.

## 🎨 특징

- 전통적인 한옥 분위기의 디자인
- 반응형 모바일 최적화
- 부드러운 애니메이션 효과
- 한국어/대만어 다국어 지원
- Next.js 14 + TypeScript + Tailwind CSS

## 🚀 시작하기

### 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📝 커스터마이징

### 1. 신랑/신부 정보 수정

`components/Couple.tsx` 파일에서 이름과 부모님 정보를 수정하세요.

```tsx
<h3 className="...">홍길동</h3>
<p className="...">아버지 홍판서 · 어머니 홍부인</p>
```

### 2. 사진 추가

1. `public` 폴더에 이미지 파일을 추가하세요.
   - 신랑 사진: `public/groom.jpg`
   - 신부 사진: `public/bride.jpg`
   - 갤러리: `public/gallery/1.jpg`, `public/gallery/2.jpg` 등

2. `components/Couple.tsx`와 `components/Gallery.tsx`에서 주석 처리된 Image 컴포넌트를 활성화하세요.

### 3. 예식 정보 수정

`components/WeddingInfo.tsx` 파일에서 날짜, 시간, 장소, 연락처를 수정하세요.

### 4. 지도 연동

`components/Map.tsx` 파일에서 실제 주소에 맞게 지도 API를 연동하세요.

- 카카오맵: [Kakao Maps API](https://apis.map.kakao.com/)
- 네이버맵: [Naver Maps API](https://www.ncloud.com/product/applicationService/maps)

## 📦 빌드

```bash
npm run build
```

## 🚢 배포

### GitHub에 업로드하기

1. GitHub에서 새 저장소를 생성합니다.
   - [GitHub](https://github.com/new)에서 "New repository" 클릭
   - 저장소 이름 입력 (예: `wedding-invitation`)
   - Public 또는 Private 선택
   - "Create repository" 클릭

2. 로컬에서 Git 저장소 초기화 및 푸시:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Traditional Korean wedding invitation"

# GitHub 저장소 연결 (위에서 생성한 저장소 URL 사용)
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

**참고:** Xcode Command Line Tools가 설치되어 있지 않다면 먼저 설치해야 합니다:
```bash
xcode-select --install
```

### Vercel 배포

1. [Vercel](https://vercel.com)에 로그인합니다.
   - GitHub 계정으로 로그인 권장

2. "Add New..." → "Project" 클릭

3. GitHub 저장소 선택
   - 방금 업로드한 저장소를 선택합니다

4. 프로젝트 설정
   - Framework Preset: Next.js (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `.next` (자동 감지됨)

5. "Deploy" 클릭

6. 배포 완료
   - 배포가 완료되면 Vercel에서 제공하는 URL로 접속할 수 있습니다
   - 예: `https://wedding-invitation.vercel.app`

### 환경 변수 (필요한 경우)

지도 API 키 등이 필요한 경우:
1. Vercel 대시보드 → 프로젝트 → Settings → Environment Variables
2. 변수 추가 후 재배포

## 🎨 디자인 커스터마이징

`tailwind.config.ts`에서 색상과 폰트를 수정할 수 있습니다.

```ts
colors: {
  traditional: {
    beige: '#F5F1E8',
    cream: '#FAF8F3',
    gold: '#D4AF37',
    // ... 색상 수정
  },
}
```

## 📱 모바일 최적화

이 프로젝트는 모바일 우선으로 설계되었으며, 모든 주요 모바일 브라우저에서 테스트되었습니다.

## 📄 라이선스

MIT

