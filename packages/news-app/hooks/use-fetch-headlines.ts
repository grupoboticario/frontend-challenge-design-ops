import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "types/news";

type Headlines = {
  [category: string]: News;
};

export const useFetchHeadlines = (country: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [headlines, setHeadlines] = useState<Headlines | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios
      .get(`/api/news/headlines?country=${country}`)
      .then((res) => {
        if (mounted) {
          setHeadlines(res.data);
        }
      })
      .catch(() => {
        if (mounted) {
          setHeadlines(null);
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
    headlines,
  };
};
