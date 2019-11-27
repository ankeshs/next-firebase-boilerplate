import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Page = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <h2>Alpha</h2>
      <p>This is the blog post content.</p>
    </Layout>
  )
}

Page.getInitialProps = async () => {
    return {}
}

export default Page
