// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';
import StyleGuidePage from './pages/StyleGuidePage';
import ProfilePage from './pages/ProfilePage';
import TasksPage from './pages/TasksPage';
import FAQPage from './pages/FAQPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Routes>
      {/* All pages will render inside the MainLayout component */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sessions" element={<SessionsPage />} />
        <Route path="style-guide" element={<StyleGuidePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="resources" element={<ResourcesPage />} />
      </Route>
    </Routes>
  );
}

export default App;