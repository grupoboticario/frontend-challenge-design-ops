export const fetcher = async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const response = await fetch(input, init)

  return response.json()
}

export const fetcherWithToken = async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const url = process.env.NEXT_PUBLIC_API_URL + input

  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  }

  const response = await fetch(url, { ...init, headers })

  return response.json()
}
