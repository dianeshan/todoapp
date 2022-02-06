import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay'
import { useEnvironment } from '../lib/relay'

export default function MyApp({ Component, pageProps }: AppProps) {
    const environment = useEnvironment(pageProps.initialRecords)

    return (
        <RelayEnvironmentProvider environment={environment}>
            <Component {...pageProps} />
        </RelayEnvironmentProvider>
    )
}
