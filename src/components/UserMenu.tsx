// src/components/UserMenu.tsx
import { Avatar, Button, Typography } from '@mui/material';

export default function UserMenu() {
  return (
    <Button
      variant="outlined"
      startIcon={<Avatar sx={{ width: 32, height: 32, bgcolor: 'var(--color-primary-main)' }}>D</Avatar>}
      sx={{
        borderColor: 'var(--color-border-secondary)',
        color: 'var(--color-text-secondary)',
        borderRadius: 'var(--radius-full)',
        textTransform: 'none',
        padding: 'var(--space-xs) var(--space-sm)',
        '&:hover': {
          borderColor: 'var(--color-border-primary)',
          backgroundColor: 'var(--color-background-secondary)',
        },
      }}
    >
      <Typography component="span" sx={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-sm)' }}>
        Good morning, David!
      </Typography>
    </Button>
  );
}