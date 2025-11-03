// src/layouts/MainLayout.tsx
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

// UPDATED: Sidebar width changed to 13rem (208px)
const drawerWidth = '13rem';

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-background-default)' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth})`,
          backgroundColor: 'var(--color-background-paper)',
        }}
      >
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            p: 'var(--space-lg)',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}