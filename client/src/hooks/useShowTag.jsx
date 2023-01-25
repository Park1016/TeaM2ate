import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

import { httpSelector } from "state/http";
import BoardApi from "api/board";

const useShowTag = (props) => {
  const http = useRecoilValue(httpSelector);
  const { data } = useQuery(["showTag"], async () => {
    return await new BoardApi(http).getBoard();
  });

  const onCountDup = (str) => {
    const arr = str.split(",");
    const res = arr.reduce((accu, curr) => {
      // 객체에서 curr key값을 찾아 value값이 있으면 그 value에서 1을 더하고, 없다면 0을 할당하고 거기에 1을 더해줌
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, {});
    return res;
  };

  const onShowTag = () => {
    if (data) {
      if (data.length === 0) {
        return false;
      }
      const str = data
        .map((x) => x.tag)
        .filter((x) => x.length !== 0)
        .join(",");
      const obj = onCountDup(str);
      const sort = Object.entries(obj)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
      return Object.keys(sort).slice(0, 10);
    }
  };
  return [onShowTag];
};

export default useShowTag;
