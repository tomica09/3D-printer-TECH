# TECH 교내 3D 프린터 통합 사용 매뉴얼

경기과학고등학교 TECH의 프린터 사용 신청 및 사용 안내입니다.

- 상단: 송죽학사 신청 절차, STL 첨부와 승인 확인, 사용 대장 작성
- 큐비콘: Style NEO A22 / A31, USB 출력 안내
- 뱀부랩: Bambu Lab X2D, 제공 PDF를 반영한 20단계 안내와 원본 PDF
- 프린터 선택, 사진 확대, 선택한 매뉴얼 인쇄

## Vercel에서 배포

1. 이 폴더의 **내용 전체**를 GitHub 저장소의 최상위에 올립니다. 저장소 첫 화면에서 `vercel.json`과 `dist`가 보여야 합니다.
2. Vercel에서 **Add New → Project**를 선택하고 해당 저장소를 Import합니다.
3. Root Directory는 저장소 최상위(`./`)로 둡니다. Framework Preset은 **Other**입니다.
4. Output Directory는 `vercel.json`의 `dist` 설정을 사용합니다. 설치 명령이나 빌드 명령은 필요하지 않습니다. 별도 Override는 켜지 않습니다.
5. **Deploy**를 눌러 게시합니다. 배포된 주소를 공유합니다.

환경변수·API 키·데이터베이스·유료 애드온은 필요하지 않습니다. Vercel 계정과 사용 요금제 조건은 별도로 적용됩니다.

## 로컬에서 확인

`dist/index.html`을 브라우저로 열어 확인할 수 있습니다. `dist` 폴더와 그 안의 파일·사진 경로를 함께 유지하세요.

Vercel CLI가 설치되어 있고 로그인되어 있다면 이 폴더에서 `vercel --prod`로도 배포할 수 있습니다.

## 수정할 파일

| 파일 | 내용 |
| --- | --- |
| `dist/index.html` | 신청 안내와 두 기종의 매뉴얼 본문 |
| `dist/style.css` | 화면 크기에 따른 배치와 인쇄 스타일 |
| `dist/app.js` | 프린터 선택, 사진 확대, 인쇄 |
| `dist/assets/` | 설명 사진과 뱀부랩 원본 PDF |
| `vercel.json` | Vercel 정적 사이트 설정 |

## 자료

제공된 큐비콘 사용매뉴얼 PPTX와 Bambu Lab X2D 사용 메뉴얼 PDF를 바탕으로 구성했습니다. 원본 자료의 저작권은 각 권리자에게 있습니다.

사용 대장 작성 안내는 필수 안내로 유지하세요. 실제 장비 설정과 담당자 지침을 우선 확인합니다.
