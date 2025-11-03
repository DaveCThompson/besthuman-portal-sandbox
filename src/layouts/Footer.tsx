// src/layouts/Footer.tsx
import { Box, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 'var(--space-md)',
        px: 'var(--space-lg)',
        mt: 'auto', // Pushes footer to the bottom of the flex container
        backgroundColor: 'var(--color-background-paper)',
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        For any questions or technical issues, please contact us at{' '}
        <Link href="mailto:team@locelle.com" underline="hover">
          team@locelle.com
        </Link>
        .
      </Typography>
    </Box>
  );
}