// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';
import StyleGuidePage from './pages/StyleGuidePage';

function App() {
  return (
    <Routes>
      {/* All pages will render inside the MainLayout component */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sessions" element={<SessionsPage />} />
        <Route path="style-guide" element={<StyleGuidePage />} />
      </Route>
    </Routes>
  );
}

export default App;