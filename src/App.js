import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer/Footer';
import ApplyFinishPage from './pages/ApplyFinish';
import ApplyInfoPage from './pages/ApplyInfo';
import ApplyMainPage from './pages/ApplyMain';
import ApplyNotFoundPage from './pages/ApplyNotFound';
import ApplyWritePage from './pages/ApplyWrite';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
