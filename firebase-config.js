// ============================================================
// Firebase 설정 파일
// ============================================================
// 리더(이보슬)가 이 파일을 한 번만 편집하여 GitHub repo에 업로드하면
// 모든 팀원이 별도 설정 없이 자동으로 동일한 Firebase에 연결됩니다.
//
// 작성 방법:
// 1. https://console.firebase.google.com 에서 프로젝트 생성
// 2. Build → Realtime Database 활성화 (Singapore 권장, test mode)
// 3. 프로젝트 Settings → Your apps → Web 앱 등록
// 4. 표시된 firebaseConfig 객체를 아래 window.FIREBASE_CONFIG = ... 의
//    중괄호 { ... } 안에 그대로 붙여넣기
// 5. GitHub repo에 이 파일을 업데이트 (Commit)
//
// ⚠️ 이 파일의 값들은 비밀이 아닙니다 (Firebase가 의도한 공개 설정).
//    실제 보안은 Realtime Database Rules에서 처리합니다.
// ============================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCw_0uVEZxwwj_68OmV-qxUHaS5vOCzgpw",
  authDomain: "shopee-okr.firebaseapp.com",
  databaseURL: "https://shopee-okr-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopee-okr",
  storageBucket: "shopee-okr.appspot.com",
  messagingSenderId: "108578588478",
  appId: "1:108578588478:web:58fdad7f69685b24acce6f"
};

// 위 객체가 비어있으면 대시보드는 "Firebase 연결 필요" 화면을 보여주고,
// 각 사용자가 ⚙️ 설정 버튼으로 임시 입력할 수 있습니다.
