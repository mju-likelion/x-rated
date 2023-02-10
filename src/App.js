import { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import ApplyCheckPage from './pages/ApplyCheck';
import ApplyFinishPage from './pages/ApplyFinish';
import ApplyInfoPage from './pages/ApplyInfo';
import ApplyMainPage from './pages/ApplyMain';
import ApplyNotFoundPage from './pages/ApplyNotFound';
import ApplyWritePage from './pages/ApplyWrite';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<ApplyMainPage />} />
          <Route path="/info" element={<ApplyInfoPage />} />
          <Route path="/write" element={<ApplyWritePage />} />
          <Route path="/finish" element={<ApplyFinishPage />} />
          <Route path="/*" element={<ApplyNotFoundPage />} />
          <Route path="/check" element={<ApplyCheckPage />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
