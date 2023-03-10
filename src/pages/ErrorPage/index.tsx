import Error from '@components/Error';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './index.scss';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Error />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
