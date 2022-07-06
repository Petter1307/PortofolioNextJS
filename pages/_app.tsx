import type { AppProps } from 'next/app';
import { AuthProvider } from '../auth/AuthProvider';
import '../styles/style.scss';
// import { SideBar } from '../components';
// import { SideBar } from '@components/SideBar';
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
