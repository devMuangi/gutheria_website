import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
