import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "types/news";

type LatestNews = {
  [category: string]: News;
};

export const useFetchLatestNews = (country: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [latestNews, setLatestNews] = useState<LatestNews | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios
      .get(`/api/news/latest-news?country=${country}`)
      .then((res) => {
        if (mounted) {
          setLatestNews(res.data);
        }
      })
      .catch(() => {
        if (mounted) {
          setLatestNews(null);
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
  }, [country]);

  return {
    loading,
    error,
    latestNews,
  };
};
