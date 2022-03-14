import { Header } from '~/components/Header'
import { Main } from '~/components/Main'
import { Nav } from '~/components/Nav'
import { Search } from '~/components/Search'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Search
          css={{
            '@bp1': {
              display: 'flex',
            },
            '@bp3': {
              display: 'none',
            },
          }}
        />
        {children}
      </Main>
    </>
  )
}
