import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import DashboardLayout from '../components/DashboardLayout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if(router.pathname.startsWith("/dashboard")){
    return (
      <Provider store={store}>
        <DashboardLayout>
          <Component {...pageProps} />
          </DashboardLayout>
      </Provider>
    )
  }
  else{
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp
