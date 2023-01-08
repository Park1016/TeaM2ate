import { useNavigate } from "react-router-dom";

const useCheckAuth = ({ auth, page }) => {
  const navigate = useNavigate();

  const checkAuth = () => {
    if (!auth) {
      alert("로그인 후 접근 가능한 페이지입니다");
      navigate("/login", {
        state: {
          page,
        },
      });
    }
  };

  return [checkAuth];
};

export default useCheckAuth;
