import useSWR from 'swr'
import { useStore } from '~/store'

export const useFetchTopHeadlines = () => {
  const { locale } = useStore((store) => store.state)

  const { data, error, isValidating } = useSWR(`/top-headlines?pageSize=3&country=${locale.region}&category=general`)

  const isLoading = !isValidating && !error && data

  return { data, isLoading }
}
