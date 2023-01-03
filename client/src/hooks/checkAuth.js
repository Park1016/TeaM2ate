export function checkAuth(auth) {
  if (!auth) {
    alert("로그인 후 접근 가능한 페이지입니다");
    window.location.replace("/");
  }
}
