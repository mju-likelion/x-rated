import { Route, Routes } from 'react-router-dom';

import ApplyFinishPage from './pages/ApplyFinishPage';
import ApplyInfoPage from './pages/ApplyInfoPage';
import ApplyMainPage from './pages/ApplyMainPage';
import ApplyWritePage from './pages/ApplyWritePage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ApplyMainPage />} />
        <Route path="/info" element={<ApplyInfoPage />} />
        <Route path="/write" element={<ApplyWritePage />} />
        <Route path="/finish" element={<ApplyFinishPage />} />
      </Routes>
    </>
  );
}

export default App;
