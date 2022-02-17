import { categories } from "data/categories";
import type { NextApiRequest, NextApiResponse } from "next";
import api from "services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { country } = req.query;

    const categoriesLatestNews = categories
      .map((item) => item.route.replace("/", ""))
      .filter((item) => item.length);

    const news = await categoriesLatestNews.reduce(async (acc, category) => {
      const {
        data: {
          articles: [newAbout],
        },
      } = await api.get(
        `/top-headlines?country=${country}&category=${category}&sortBy=publishedAt&pageSize=1`
      );

      return { ...(await acc), [category]: newAbout };
    }, {});

    res.status(200).json(news);
  } catch (error) {
    res.status(500);
  }
}
