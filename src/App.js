import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ApplyFinishPage from './pages/ApplyFinish';
import ApplyInfoPage from './pages/ApplyInfo';
import ApplyMainPage from './pages/ApplyMain';
import ApplyWritePage from './pages/ApplyWrite';
import { Theme } from './styles/Theme';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ApplyMainPage />} />
          <Route path="/info" element={<ApplyInfoPage />} />
          <Route path="/write" element={<ApplyWritePage />} />
          <Route path="/finish" element={<ApplyFinishPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
