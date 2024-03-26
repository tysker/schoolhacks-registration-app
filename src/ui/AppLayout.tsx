import Header from './Header.tsx';
import { Outlet, useNavigation } from 'react-router-dom';
import '../styles/styles.css';
import Loader from './Loader.tsx';
import Footer from './Footer.tsx';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto mt-10 max-w-3xl">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
