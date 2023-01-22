import { Route, Routes } from 'react-router-dom';

import ApplyFinishPage from './pages/applyFinishPage/ApplyFinishPage';
import ApplyInfoPage from './pages/applyInfoPage/ApplyInfoPage';
import ApplyMainPage from './pages/applyMainPage/ApplyMainPage';
import ApplyWritePage from './pages/applyWritePage/ApplyWritePage';
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
