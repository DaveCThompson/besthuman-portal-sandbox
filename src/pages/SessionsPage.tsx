// src/pages/SessionsPage.tsx
import { useState } from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import SessionsTable from '../components/SessionsTable';
import { upcomingSessions, passedSessions } from '../data/mockData';

export default function SessionsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderTabLabel = (text: string, count: number) => (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Typography component="span" variant="button">{text}</Typography>
      <Box
        component="span"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          lineHeight: '0',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--color-border-primary)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {count}
      </Box>
    </Stack>
  );

  const tabStyles: SxProps<Theme> = {
    textTransform: 'none',
    color: 'var(--color-text-secondary)',
    borderRadius: 'var(--radius-md)',
    transition: 'background-color 200ms ease-out',
    border: '1px solid var(--color-background-secondary)',
    '&.Mui-selected': {
      backgroundColor: 'var(--color-background-paper)',
      color: 'var(--color-text-primary)',
      // CORRECTED: Ensure shadow is applied and corners are clean
      boxShadow: 'var(--shadow-sm)',
      borderColor: 'var(--color-border-secondary)',
      overflow: 'hidden',
    },
    '&:not(.Mui-selected):hover': {
      backgroundColor: 'var(--color-control-bg-secondary-hover)',
      borderColor: 'var(--color-control-bg-secondary-hover)',
    },
    '&:focus': {
      outline: 'none',
    },
  };

  return (
    <Stack spacing={'var(--space-lg)'} alignItems="flex-start">
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
          <Tab
            disableRipple
            label={renderTabLabel('My sessions', upcomingSessions.length)}
            sx={tabStyles}
          />
          <Tab
            disableRipple
            label={renderTabLabel('Completed sessions', passedSessions.length)}
            sx={tabStyles}
          />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%', mt: 'var(--space-xl)' }}>
        {value === 0 && <SessionsTable title="Upcoming sessions" sessions={upcomingSessions} />}
        {value === 1 && <SessionsTable title="Passed Sessions" sessions={passedSessions} />}
      </Box>
    </Stack>
  );
}