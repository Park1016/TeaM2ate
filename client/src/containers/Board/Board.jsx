import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Board.module.scss";

import { httpSelector } from "state/http";
import BoardApi from "api/board";

import { userState } from "state/user";
import BoardPost from "containers/BoardPost/BoardPost";
import Filter from "components/Filter/Filter";
import useFilterSearch from "hooks/useFilterSearch";

// import useHttp from "hooks/useHttp";

function Board(props) {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const [searchParams] = useSearchParams();
  const [onSearch] = useFilterSearch();

  const user = useRecoilValue(userState);
  // const [makeHttp] = useHttp({ http });
  const { data } = useQuery(["board"], async () => {
    return await new BoardApi(http).getBoard();
    // return await new BoardApi(http).getBoardByAmount("findTeam", 0, 3);
  });
  const [check, setCheck] = useState(true);
  const [search, setSearch] = useState([]);

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);'

  useEffect(() => {
    onSearch(data, searchParams.get("keyword"), setSearch);
  }, [searchParams]);

  return (
    <>
      {data && (
        <>
          <article className={cx("article")}>
            <Filter check={check} setCheck={setCheck} />
            <ul className={cx("postWrap")}>
              {check ? (
                searchParams.get("keyword") ? (
                  search.length === 0 ? (
                    <p className={cx("noResult")}>
                      {`"${searchParams.get(
                        "keyword"
                      )}"에 대한 검색 결과가 없습니다`}
                    </p>
                  ) : (
                    search
                      .filter((x) => x.progress === "ing")
                      .map((item) => (
                        <BoardPost key={item.id} value={item} user={user} />
                      ))
                  )
                ) : (
                  data
                    .filter((x) => x.progress === "ing")
                    .map((item) => (
                      <BoardPost key={item.id} value={item} user={user} />
                    ))
                )
              ) : searchParams.get("keyword") ? (
                search.length === 0 ? (
                  <p className={cx("noResult")}>
                    {`"${searchParams.get(
                      "keyword"
                    )}"에 대한 검색 결과가 없습니다`}
                  </p>
                ) : (
                  search.map((item) => (
                    <BoardPost key={item.id} value={item} user={user} />
                  ))
                )
              ) : (
                data.map((item) => (
                  <BoardPost key={item.id} value={item} user={user} />
                ))
              )}
            </ul>
          </article>
        </>
      )}
    </>
  );
}

export default Board;
