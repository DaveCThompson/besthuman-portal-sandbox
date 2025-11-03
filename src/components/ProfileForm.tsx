// src/components/ProfileForm.tsx
import { useState, type ChangeEvent } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import type { UserProfile } from '../types';

interface ProfileFormProps {
  user: UserProfile;
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const [formState, setFormState] = useState(user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ width: '100%' }}>
      {/* CORRECTED: Grid container now has explicit columns definition for better control */}
      <Grid container spacing={3} columns={12}>
        <Grid item xs={12} md={6}>
          <TextField label="Name" name="name" value={formState.name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Company" name="company" value={formState.company} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Job Title" name="jobTitle" value={formState.jobTitle} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="LinkedIn Profile"
            name="linkedinUrl"
            value={formState.linkedinUrl}
            onChange={handleChange}
            helperText="Copy and paste the entire profile link (including https://)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Primary Email"
            name="primaryEmail"
            value={formState.primaryEmail}
            onChange={handleChange}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Alternate Email"
            name="alternateEmail"
            placeholder="Enter your alternate email"
            value={formState.alternateEmail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your Career Goals"
            name="careerGoals"
            value={formState.careerGoals}
            onChange={handleChange}
            multiline
            rows={4}
            helperText="Share your aspirations to help your coach guide you."
          />
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" sx={{ mt: 'var(--space-lg)' }}>
        <Button variant="contained" color="primary">
          Update Profile
        </Button>
        <Button variant="outlined">Reset Password</Button>
      </Stack>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 'var(--space-sm)' }}>
        Simply edit your details and click 'Update Profile' to save.
      </Typography>
    </Box>
  );
}