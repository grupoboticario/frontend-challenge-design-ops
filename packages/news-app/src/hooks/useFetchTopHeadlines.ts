import useSWR from 'swr'
import { useStore } from '~/store'

export const useFetchTopHeadlines = () => {
  const { locale } = useStore((store) => store.state)

  const { data, error, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/top-headlines?pageSize=3&country=${locale.region}&category=general`
  )

  const results = data ? [].concat(...data) : []
  const isLoading = !isValidating && !error && data

  return { data: results, isLoading }
}
