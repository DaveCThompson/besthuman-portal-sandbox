// src/pages/StyleGuidePage.tsx
import {
  Box,
  Typography,
  Card,
  Stack, // CORRECTED: Removed unused 'Button' import
  Grid,
  Alert,
} from '@mui/material';

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <Box>
    <Box sx={{ width: 100, height: 100, backgroundColor: color, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-primary)' }} />
    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'var(--font-weight-medium)' }}>{name}</Typography>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{color}</Typography>
  </Box>
);

export default function StyleGuidePage() {
  return (
    <Box sx={{ p: 'var(--space-xl)', backgroundColor: 'var(--color-background-default)' }}>
      <Typography variant="h1" gutterBottom>
        Style Guide
      </Typography>

      <Typography variant="h3" gutterBottom sx={{ mt: 'var(--space-lg)' }}>
        Color Palette
      </Typography>
      <Card sx={{ p: 'var(--space-lg)' }}>
        <Grid container spacing={2}>
          <Grid item><ColorSwatch color="var(--color-primary-main)" name="Primary" /></Grid>
          <Grid item><ColorSwatch color="var(--color-success-main)" name="Success" /></Grid>
          <Grid item><ColorSwatch color="var(--color-warning-main)" name="Warning" /></Grid>
          <Grid item><ColorSwatch color="var(--color-error-main)" name="Error" /></Grid>
          <Grid item><ColorSwatch color="var(--color-info-main)" name="Info" /></Grid>
        </Grid>
      </Card>
      
      <Typography variant="h3" gutterBottom sx={{ mt: 'var(--space-lg)' }}>
        Status Components
      </Typography>
      <Card sx={{ p: 'var(--space-lg)' }}>
        <Stack spacing={2}>
            <Alert severity="success">This is a success message.</Alert>
            <Alert severity="info">This is an info message.</Alert>
            <Alert severity="warning">This is a warning message.</Alert>
            <Alert severity="error">This is an error message.</Alert>
        </Stack>
      </Card>

      <Typography variant="h3" gutterBottom sx={{ mt: 'var(--space-lg)' }}>
        Shadows & Surfaces
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, boxShadow: 'var(--shadow-sm)' }}>
            <Typography variant="h6">Small Shadow</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, boxShadow: 'var(--shadow-md)' }}>
            <Typography variant="h6">Medium Shadow</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, boxShadow: 'var(--shadow-lg)' }}>
            <Typography variant="h6">Large Shadow</Typography>
          </Card>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, boxShadow: 'var(--shadow-xl)' }}>
            <Typography variant="h6">Extra Large Shadow</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}