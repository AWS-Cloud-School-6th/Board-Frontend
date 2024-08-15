// src/App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Question {
  id: number;
  subject: string;
  content: string;
  createDate: [number, number, number, number, number, number, number];
  authorUsername: string;
  modifyDate: string | null;
  answerList: any[];
}

interface ApiResponse {
  content: Question[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

const url = `${process.env.REACT_APP_API_URL}/questions/?kw=&page=0`;

export function Board() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(url);
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const dataAsString = JSON.stringify(data, null, 2);

  return (
    <div>
      <h1>API 테스트 </h1>
      <pre>{dataAsString}</pre>
    </div>
  );
}
