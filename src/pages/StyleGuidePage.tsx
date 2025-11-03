// src/pages/StyleGuidePage.tsx
import {
  Box,
  Typography,
  Card,
  Stack,
  Grid,
  Alert,
  Button,
  TextField,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusChip from '../components/StatusChip';

const ColorSwatch = ({ color, name, token }: { color: string; name: string; token: string }) => (
  <Box sx={{ minWidth: 120 }}>
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: color,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-border-primary)',
      }}
    />
    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'var(--font-weight-medium)' }}>
      {name}
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
      {token}
    </Typography>
  </Box>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box component="section" sx={{ mb: 'var(--space-xl)' }}>
    <Typography variant="h3" gutterBottom sx={{ mt: 'var(--space-lg)', color: 'var(--color-text-secondary)' }}>
      {title}
    </Typography>
    <Card sx={{ p: 'var(--space-lg)' }}>{children}</Card>
  </Box>
);

export default function StyleGuidePage() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Living Style Guide
      </Typography>

      <Section title="Color Palette">
        <Typography variant="h6" gutterBottom>
          Semantic Colors
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <ColorSwatch color="var(--color-primary-main)" name="Primary" token="--color-primary-main" />
          </Grid>
          <Grid item>
            <ColorSwatch color="var(--color-success-main)" name="Success" token="--color-success-main" />
          </Grid>
          <Grid item>
            <ColorSwatch color="var(--color-warning-main)" name="Warning" token="--color-warning-main" />
          </Grid>
          <Grid item>
            <ColorSwatch color="var(--color-error-main)" name="Error" token="--color-error-main" />
          </Grid>
          <Grid item>
            <ColorSwatch color="var(--color-info-main)" name="Info" token="--color-info-main" />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Text & Surface Colors
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <ColorSwatch color="var(--color-text-primary)" name="Text Primary" token="--color-text-primary" />
          </Grid>
          <Grid item>
            <ColorSwatch
              color="var(--color-text-secondary)"
              name="Text Secondary"
              token="--color-text-secondary"
            />
          </Grid>
          <Grid item>
            <ColorSwatch
              color="var(--color-background-default)"
              name="Bg Default"
              token="--color-background-default"
            />
          </Grid>
          <Grid item>
            <ColorSwatch color="var(--color-background-paper)" name="Bg Paper" token="--color-background-paper" />
          </Grid>
        </Grid>
      </Section>

      <Section title="Typography">
        <Typography variant="h1">Display LG (h1)</Typography>
        <Typography variant="h3">Display SM (h3)</Typography>
        <Typography variant="h4">Display XS (h4)</Typography>
        <Typography variant="h5">Headline XL (h5)</Typography>
        <Typography variant="h6">Headline LG (h6)</Typography>
        <Typography variant="body1">
          Body 1 (md): The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography variant="body2">
          Body 2 (sm): The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography variant="button">Button Text</Typography>
        <Typography variant="caption">
          Caption (xs): The quick brown fox jumps over the lazy dog.
        </Typography>
      </Section>

      <Section title="Buttons">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6">Contained</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="contained" color="primary">
                Default
              </Button>
              <Button variant="contained" color="primary" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6">Outlined</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="outlined">Default</Button>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Section>

      <Section title="Form Elements">
        <Typography variant="h6" gutterBottom>
          Text Field
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField label="Default" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="With Helper Text" helperText="This is some helpful text." />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Disabled" disabled />
          </Grid>
        </Grid>
      </Section>

      <Section title="Interactive Components">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Status Chips</Typography>
            <Stack direction="row" spacing={1}>
              <StatusChip status="Completed" />
              <StatusChip status="Scheduled" />
              <StatusChip status="Pending" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Styled Tabs</Typography>
            <Box
              sx={{
                backgroundColor: 'var(--color-background-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-secondary)',
                p: 'var(--space-xs)',
                display: 'inline-block',
              }}
            >
              <Tabs
                value={0}
                sx={{
                  minHeight: 'auto',
                  '& .MuiTabs-flexContainer': { gap: 'var(--space-xs)' },
                  '& .MuiTabs-indicator': { display: 'none' },
                }}
              >
                <Tab label="Tab One" sx={{ textTransform: 'none', '&.Mui-selected': { boxShadow: 'var(--shadow-sm)' } }} />
                <Tab label="Tab Two" sx={{ textTransform: 'none' }} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
             <Typography variant="h6" gutterBottom>Accordion</Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Example</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>This is the content inside the accordion.</Typography>
                </AccordionDetails>
              </Accordion>
          </Grid>
           <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Alerts</Typography>
            <Stack spacing={2}>
                <Alert severity="success">This is a success message.</Alert>
                <Alert severity="info">This is an info message.</Alert>
                <Alert severity="warning">This is a warning message.</Alert>
                <Alert severity="error">This is an error message.</Alert>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      <Section title="Shadows & Surfaces">
        <Grid container spacing={4}>
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <Grid item xs={12} sm={6} md={3} key={size}>
              <Card sx={{ p: 2, boxShadow: `var(--shadow-${size})` }}>
                <Typography variant="h6">Shadow {size.toUpperCase()}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
}