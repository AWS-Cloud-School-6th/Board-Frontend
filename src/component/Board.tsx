import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Board() {
  const { page } = useParams<{ page: string }>(); // useParams를 사용하여 경로 파라미터 추출
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // 페이지 번호가 없으면 기본값으로 0 사용
    const currentPage = page ? parseInt(page, 10) : 0;

    // 데이터 요청 URL
    const apiUrl = `https://was.seungho.shop/api/questions/?kw=&page=${currentPage}`;

    // API로부터 데이터를 가져오기
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: ApiResponse) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Board</h1>
      {data.content.map((post) => (
        <div
          key={post.id}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <h2>{post.subject}</h2>
          <p>{post.content}</p>
          <p>Author: {post.authorUsername}</p>
          <p>
            Date:{" "}
            {new Date(
              post.createDate[0],
              post.createDate[1] - 1,
              post.createDate[2],
              post.createDate[3],
              post.createDate[4],
              post.createDate[5],
              Math.floor(post.createDate[6] / 1000000)
            ).toLocaleString()}
          </p>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => (window.location.href = `/board/${Number(page) - 1}`)}
          disabled={data.first}
        >
          Previous
        </button>
        <button
          onClick={() => (window.location.href = `/board/${Number(page) + 1}`)}
          disabled={data.last}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Post 및 ApiResponse 인터페이스는 동일하게 유지

interface Post {
  id: number;
  subject: string;
  content: string;
  createDate: number[];
  authorUsername: string;
  modifyDate: number[] | null;
  answerList: any[]; // 적절한 타입으로 변경 필요
}

// API 응답 타입 정의
interface ApiResponse {
  content: Post[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  number: number;
  size: number;
  numberOfElements: number;
  empty: boolean;
}
