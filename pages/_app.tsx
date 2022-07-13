import type { AppProps } from 'next/app';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/style.scss';

import { SideBar } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <SideBar>
        <div className="page">
          <Component {...pageProps} />
        </div>
      </SideBar>
    </AuthProvider>
  );
};

export default MyApp;
