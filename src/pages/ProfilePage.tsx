// src/pages/ProfilePage.tsx
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { mockUserProfile } from '../data/mockData';
import ProfileForm from '../components/ProfileForm';

export default function ProfilePage() {
  const user = mockUserProfile;

  return (
    // CORRECTED: Removed alignItems="flex-start" to allow children to stretch to the full width of this container. This is the critical fix for the form layout.
    <Stack spacing={'var(--space-lg)'} sx={{ maxWidth: '1100px', mx: 'auto', width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h5" sx={{ color: 'var(--color-primary-main)', mb: 'var(--space-md)' }}>
          Your Profile
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            p: 'var(--space-lg)',
            backgroundColor: 'var(--color-background-secondary-subtle)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-primary)',
          }}
        >
          <Avatar sx={{ width: 64, height: 64, bgcolor: 'var(--color-primary-main)', fontSize: '1.75rem' }}>
            {user.avatarInitials}
          </Avatar>
          <Box>
            <Typography variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user.jobTitle} at {user.company}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <ProfileForm user={user} />
    </Stack>
  );
}