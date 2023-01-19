import { useRecoilValue, useSetRecoilState } from "recoil";
import { csrfState } from "state/http";

const useHttp = ({ http }) => {
  const csrf = useRecoilValue(csrfState);
  const setCsrf = useSetRecoilState(csrfState);

  const makeHttp = () => {
    if (csrf) {
      return;
    }
    setCsrf(http);
  };

  return [makeHttp];
};

export default useHttp;
