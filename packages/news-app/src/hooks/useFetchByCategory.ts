import useSWRInfinite from 'swr/infinite'
import { useStore } from '~/store'
import { queryString } from '~/utils/queryString'

type useFetchByCategoryProps = {
  pageSize?: number
  params?: any
}

export const useFetchByCategory = (props: useFetchByCategoryProps) => {
  const { locale, defaultPageSize } = useStore((store) => store.state)
  const pageSize = props?.pageSize ?? defaultPageSize
  const params = props?.params ? queryString(props?.params) : 'category=entertainment'

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/top-headlines?page=${index + 1}&pageSize=${pageSize}&country=${locale.region}&${params}`
  )

  const isEmpty = data?.[0]?.articles.length === 0
  const results = data ? [].concat(...data?.[0]?.articles) : []

  return { data: results, error, isEmpty, size, setSize }
}
