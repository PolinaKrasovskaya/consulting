import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export const Layout = () => {
  return (
    <>
      <Header />
      <Modal />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster />
    </>
  );
};
