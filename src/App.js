import { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ChannelService from './components/ChannelTalk/ChannelService';
import FloatingButton from './components/ChannelTalk/FloatingButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
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

  ChannelService.boot({
    pluginKey: process.env.REACT_APP_CHANNEL_TALK, // fill your plugin key
  });

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
        </Routes>
        <FloatingButton />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
