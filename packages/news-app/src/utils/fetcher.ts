import { NewsResponse } from '@models/NewsResponse';

async function fetcher<T>(url: string): Promise<{
  total: number
  articles: T[]
}> {
  return fetch(url)
    .then((res) => res.json())
    .then((response: NewsResponse<T>) => ({
      total: response.totalResults,
      articles: response.articles,
    }));
}

export default fetcher;
