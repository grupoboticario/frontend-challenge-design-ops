import { Headline } from '@models/Headlines';
import { NewsResponse } from '@models/NewsResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsResponse<Headline>>,
) {
  const params = [
    `language=${req.query.language}`,
    `q=${req.query.search || 'last'}`,

    `page=${req.query.page || '1'}`,
    `pageSize=${req.query.pageSize || '6'}`,
    `apiKey=${process.env.NEWS_API_KEY}`,

  ].filter((param) => param !== undefined).join('&');

  const url = `${process.env.NEWS_URL}everything?${params}`;

  fetch(url)
    .then((response) => response.json())
    .then(res.status(200).json)
    .catch((err) => {
      res.status(500).json(err);
    });
}
