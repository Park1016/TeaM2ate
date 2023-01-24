import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames/bind";

import styles from "./Board.module.scss";

import { httpSelector } from "state/http";
import BoardApi from "api/board";

import BoardPost from "containers/BoardPost/BoardPost";
import Filter from "components/Filter/Filter";
import useFilterSearch from "hooks/useFilterSearch";

// import useHttp from "hooks/useHttp";

function Board(props) {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const [searchParams] = useSearchParams();
  const [onSearch] = useFilterSearch();
  // const [makeHttp] = useHttp({ http });
  const { isLoading, error, data } = useQuery(["board"], async () => {
    return await new BoardApi(http).getBoard();
    // return await new BoardApi(http).getBoardByAmount("findTeam", 0, 3);
  });
  const [check, setCheck] = useState(true);
  const [search, setSearch] = useState([]);
  const [initData, setInitData] = useState(data.slice(0, 2));
  const [infinite, setInfinite] = useState([]);

  const add = 5;
  const [searchStart, setSearchStart] = useState(add);
  const [searchEnd, setSearchEnd] = useState(add * 2);
  const [dataStart, setDataStart] = useState(add);
  const [dataEnd, setDataEnd] = useState(add * 2);

  const onLoadSearchData = () => {
    setSearchStart(searchStart + add);
    setSearchEnd(searchEnd + add);
    setInfinite([...infinite, ...search.slice(searchStart, searchEnd)]);
  };

  const onLoadData = () => {
    setDataStart(dataStart + add);
    setDataEnd(dataEnd + add);
    setInitData([...initData, ...data.slice(dataStart, dataEnd)]);
  };

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);'

  useEffect(() => {
    onSearch(data, searchParams.get("keyword"), setSearch, setInfinite);
  }, [searchParams]);

  return (
    <>
      {isLoading && <p>Loading!</p>}
      {error && <p>Error!</p>}
      {data && (
        <>
          <article className={cx("article")}>
            <Filter check={check} setCheck={setCheck} />

            {check ? (
              searchParams.get("keyword") ? (
                search.length === 0 ? (
                  <p className={cx("noResult")}>
                    {`"${searchParams.get(
                      "keyword"
                    )}"에 대한 검색 결과가 없습니다`}
                  </p>
                ) : (
                  <InfiniteScroll
                    className={cx("postWrap")}
                    dataLength={infinite.length} // 반복되는 컴포넌트의 개수
                    next={onLoadSearchData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
                    hasMore={true} // 추가 데이터 유무
                    // loader={<h1>Loading...</h1>} // 로딩스피너
                  >
                    {infinite
                      .filter((x) => x.progress === "ing")
                      .map((item) => (
                        <BoardPost key={item.id} value={item} />
                      ))}
                  </InfiniteScroll>
                )
              ) : (
                <InfiniteScroll
                  className={cx("postWrap")}
                  dataLength={initData.length} // 반복되는 컴포넌트의 개수
                  next={onLoadData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
                  hasMore={true} // 추가 데이터 유무
                  // loader={<h1>Loading...</h1>} // 로딩스피너
                >
                  {initData
                    .filter((x) => x.progress === "ing")
                    .map((item) => (
                      <BoardPost key={item.id} value={item} />
                    ))}
                </InfiniteScroll>
              )
            ) : searchParams.get("keyword") ? (
              search.length === 0 ? (
                <p className={cx("noResult")}>
                  {`"${searchParams.get(
                    "keyword"
                  )}"에 대한 검색 결과가 없습니다`}
                </p>
              ) : (
                <InfiniteScroll
                  className={cx("postWrap")}
                  dataLength={infinite.length} // 반복되는 컴포넌트의 개수
                  next={onLoadSearchData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
                  hasMore={true} // 추가 데이터 유무
                  // loader={<h1>Loading...</h1>} // 로딩스피너
                >
                  {infinite.map((item) => (
                    <BoardPost key={item.id} value={item} />
                  ))}
                </InfiniteScroll>
              )
            ) : (
              <InfiniteScroll
                className={cx("postWrap")}
                dataLength={initData.length} // 반복되는 컴포넌트의 개수
                next={onLoadData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
                hasMore={true} // 추가 데이터 유무
                // loader={<h1>Loading...</h1>} // 로딩스피너
              >
                {initData.map((item) => (
                  <BoardPost key={item.id} value={item} />
                ))}
              </InfiniteScroll>
            )}
          </article>
        </>
      )}
    </>
  );
}

export default Board;
