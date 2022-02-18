import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "types/news";

type NewsKeyWord = {
  totalResults: string;
  articles: News[];
};

export const useFetchNewsByKeyWord = (
  keyword: string,
  language: string,
  totalPage: number = 0
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [newsByKeyWord, setNewsByKeyWord] = useState<NewsKeyWord | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios
      .get(
        `/api/news/search?keyWord=${keyword}&language=${language}&pageSize=${totalPage}`
      )
      .then((res) => {
        if (mounted) {
          setNewsByKeyWord(res.data);
        }
      })
      .catch(() => {
        if (mounted) {
          setNewsByKeyWord(null);
          setError(true);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [keyword, language, totalPage]);

  return {
    loading,
    error,
    newsByKeyWord,
  };
};
