import { Highlighted } from '~/components/Articles/Highlighted'
import { Latest } from '~/components/Articles/Latest'
import { Divider } from '~/components/Divider'
import { Layout } from '~/components/Layout'

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <Layout>
      <Highlighted />
      <Divider />
      <Latest />
    </Layout>
  )
}

export default Home
