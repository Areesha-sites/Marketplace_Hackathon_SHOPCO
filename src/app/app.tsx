import { LanguageProvider } from './Components/context/LanguageContext';
import type { AppProps } from 'next/app' 

export default function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}