# 배포 가이드

## GitHub 업로드 및 Vercel 배포 단계별 가이드

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com/new) 접속
2. "New repository" 클릭
3. 저장소 정보 입력:
   - Repository name: `wedding-invitation` (또는 원하는 이름)
   - Description: "Traditional Korean wedding invitation website"
   - Public 또는 Private 선택
4. "Create repository" 클릭

### 2단계: 로컬에서 Git 초기화 및 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
# 프로젝트 디렉토리로 이동
cd /Users/jongseoklee/wedding-invitation

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Traditional Korean wedding invitation"

# GitHub 저장소 연결 (YOUR_USERNAME을 실제 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

**주의사항:**
- Xcode Command Line Tools가 설치되어 있지 않다면 먼저 설치:
  ```bash
  xcode-select --install
  ```
- GitHub 인증이 필요할 수 있습니다 (Personal Access Token 사용)

### 3단계: Vercel 배포

1. **Vercel 가입 및 로그인**
   - [Vercel](https://vercel.com) 접속
   - "Sign Up" 클릭
   - GitHub 계정으로 로그인 (권장)

2. **프로젝트 추가**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - "Import Git Repository"에서 방금 업로드한 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Framework Preset: **Next.js** (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `.next` (자동 감지됨)
   - Install Command: `npm install` (기본값)

4. **환경 변수 설정 (필요한 경우)**
   - 현재는 환경 변수가 필요하지 않습니다
   - 나중에 API 키가 필요하면 Settings → Environment Variables에서 추가

5. **배포 실행**
   - "Deploy" 버튼 클릭
   - 배포 진행 상황을 확인할 수 있습니다

6. **배포 완료**
   - 배포가 완료되면 Vercel에서 제공하는 URL로 접속 가능
   - 예: `https://wedding-invitation.vercel.app`
   - 이 URL을 공유하면 누구나 청첩장을 볼 수 있습니다

### 4단계: 커스텀 도메인 연결 (선택사항)

1. Vercel 대시보드 → 프로젝트 → Settings → Domains
2. 원하는 도메인 입력
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정
4. 자동으로 SSL 인증서 발급

### 업데이트 배포

코드를 수정한 후:

```bash
git add .
git commit -m "Update: 변경사항 설명"
git push origin main
```

Vercel이 자동으로 변경사항을 감지하고 재배포합니다.

## 문제 해결

### Git 푸시 오류
- GitHub 인증 확인
- Personal Access Token 사용 필요할 수 있음

### Vercel 빌드 오류
- `npm run build` 로컬에서 먼저 테스트
- 빌드 로그 확인하여 오류 원인 파악

### 이미지가 표시되지 않음
- `public` 폴더에 이미지 파일이 있는지 확인
- 파일명과 경로가 정확한지 확인

