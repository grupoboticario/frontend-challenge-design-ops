import type { NextApiRequest, NextApiResponse } from "next";
import api from "services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { keyWord, language, pageSize } = req.query;

    const {
      data: { totalResults, articles },
    } = await api.get(
      `/top-headlines?q=${keyWord}&language=${language}&pageSize=${pageSize}`
    );

    res.status(200).json({ totalResults, articles });
  } catch (error) {
    res.status(500);
  }
}
