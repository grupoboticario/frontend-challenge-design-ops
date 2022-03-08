export const fetcherWithToken = async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const url = process.env.NEXT_PUBLIC_API_URL + input

  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  }

  try {
    const response = await fetch(url, { ...init, headers })
    const { articles } = await response.json()

    return articles
  } catch {
    throw new Error('Invalid Response')
  }
}
