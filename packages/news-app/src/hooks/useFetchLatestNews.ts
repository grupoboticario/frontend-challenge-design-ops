import useSWRInfinite from 'swr/infinite'
import { useStore } from '~/store'
import { queryString } from '~/utils/queryString'

type useFetchLatestNewsProps = {
  params?: any
}

export const useFetchLatestNews = (props: useFetchLatestNewsProps) => {
  const { locale, defaultPageSize } = useStore((store) => store.state)
  const paramDefault = encodeURI('category=business')
  const params = props?.params ? queryString(props?.params) : paramDefault

  const { data, error, isValidating, size, setSize } = useSWRInfinite((index) => {
    const pageSize = index === 1 ? 6 : defaultPageSize

    return `/top-headlines?page=${index + 1}&pageSize=${pageSize}&country=${locale.region}&${params}`
  })

  const results = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < defaultPageSize)
  const isRefreshing = isValidating && data && data.length === size

  return { data: results, error, size, setSize, isLoadingMore, isReachingEnd, isRefreshing }
}
