import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <h1>vaaaaacodagama </h1>
      <Component {...pageProps} />
    </UserProvider>
  )
}
