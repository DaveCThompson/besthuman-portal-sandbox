// src/layouts/Header.tsx
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import UserMenu from '../components/UserMenu';

const titles: Record<string, string> = {
  '/': 'Home',
  '/sessions': 'Sessions',
  '/style-guide': 'Style Guide',
  '/profile': 'Profile',
  '/tasks': 'Tasks',
  '/resources': 'Resources',
  '/faq': 'FAQ',
};

export default function Header() {
  const location = useLocation();
  const title = titles[location.pathname] ?? 'Dashboard';

  return (
    <Box
      component="header"
      sx={{
        // UPDATED: Header is now a styled container, co-linear with the sidebar logo box
        height: '60px',
        flexShrink: 0,
        backgroundColor: 'var(--color-background-paper)',
        borderBottom: '1px solid var(--color-border-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 'var(--space-lg)', // Horizontal padding as per Figma
      }}
    >
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <UserMenu />
    </Box>
  );
}