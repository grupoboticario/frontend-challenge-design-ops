import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "types/news";

type NewsCategory = {
  totalResults: string;
  articles: News[];
};

export const useFetchNewsByCategory = (
  country: string,
  category: string,
  totalPage: number = 0
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [newsByCategory, setNewsByCategory] = useState<NewsCategory | null>(
    null
  );

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios
      .get(
        `/api/news/news-by-category?country=${country}&category=${category}&pageSize=${totalPage}`
      )
      .then((res) => {
        if (mounted) {
          setNewsByCategory(res.data);
        }
      })
      .catch(() => {
        if (mounted) {
          setNewsByCategory(null);
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
  }, [country, category, totalPage]);

  return {
    loading,
    error,
    newsByCategory,
  };
};
