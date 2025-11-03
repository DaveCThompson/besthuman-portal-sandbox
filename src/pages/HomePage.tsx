// src/pages/HomePage.tsx
import { Box, Stack, Typography } from '@mui/material';
import DailyQuoteCard from '../components/DailyQuoteCard';
import CohortCard from '../components/CohortCard';
import { cohorts } from '../data/mockData';

export default function HomePage() {
  return (
    // UPDATED: Page content is now wrapped in a Stack with spacing from Figma
    <Stack spacing={'var(--space-lg)'}>
      <DailyQuoteCard />
      <Box>
        <Typography variant="h5" sx={{ mb: 'var(--space-md)', color: 'var(--color-primary-main)' }}>
          Your Cohorts
        </Typography>
        <Stack spacing={'var(--space-lg)'}>
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.id} cohort={cohort} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}