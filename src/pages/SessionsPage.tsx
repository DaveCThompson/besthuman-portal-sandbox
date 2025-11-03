// src/pages/SessionsPage.tsx
import { useState } from 'react';
import { Box, Stack, Tabs } from '@mui/material';
import SessionsTable from '../components/SessionsTable';
import { upcomingSessions, passedSessions } from '../data/mockData';
import { StyledTab, StyledTabContainer } from '../components/StyledTabs';

// CORRECTED: Ripple opacity is now 0.9 for stronger feedback.
const rippleProps = {
  TouchRippleProps: {
    style: {
      color: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

export default function SessionsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={'var(--space-lg)'} alignItems="flex-start">
      <StyledTabContainer>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="sessions tabs"
          sx={{
            minHeight: 'auto',
            '& .MuiTabs-flexContainer': {
              gap: 'var(--space-xs)',
            },
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          <StyledTab disableRipple={false} label="My sessions" {...rippleProps} />
          <StyledTab disableRipple={false} label="Completed sessions" {...rippleProps} />
        </Tabs>
      </StyledTabContainer>
      <Box sx={{ width: '100%', mt: 'var(--space-xl)' }}>
        {value === 0 && <SessionsTable title="Upcoming sessions" sessions={upcomingSessions} />}
        {value === 1 && <SessionsTable title="Passed Sessions" sessions={passedSessions} />}
      </Box>
    </Stack>
  );
}