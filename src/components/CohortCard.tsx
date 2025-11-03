// src/components/CohortCard.tsx
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import type { Cohort } from '../types';

interface CohortCardProps {
  cohort: Cohort;
}

export default function CohortCard({ cohort }: CohortCardProps) {
  return (
    <Accordion
      defaultExpanded
      disableGutters // Prevents default margins
      sx={{
        backgroundColor: 'var(--color-background-secondary)',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--radius-lg) !important',
        boxShadow: 'none',
        '&:before': { display: 'none' },
        // Ensure consistent margin regardless of state to prevent jumps
        '&.Mui-expanded': {
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // Set a consistent vertical padding for the summary content itself
        sx={{ '& .MuiAccordionSummary-content': { my: 'var(--space-md)' } }}
      >
        <Typography variant="h5">{cohort.name}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: 'var(--color-background-paper)',
          borderTop: '1px solid var(--color-border-secondary)',
          p: 'var(--space-lg)',
        }}
      >
        <Grid container spacing={4}>
          {/* Column 1: Cohort */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Cohort
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <PersonOutlineIcon color="action" />
                <Typography variant="body2">{cohort.participantCount} participant</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <CalendarTodayOutlinedIcon color="action" />
                <Typography variant="body2">{cohort.sessionsScheduled} sessions scheduled</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <WarningAmberRoundedIcon sx={{ color: 'var(--color-warning-main)' }} />
                <Typography variant="body2" sx={{ color: 'var(--color-warning-main)' }}>
                  {cohort.pendingCompletion} passed session to be marked as complete
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ pt: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'var(--font-weight-medium)' }}>
                  {cohort.nextSessionDate}
                </Typography>
                <Button variant="contained" color="primary" startIcon={<CheckIcon sx={{ fontSize: '16px !important' }} />}>
                  Mark complete
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Column 2: Participants */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Participants
            </Typography>
            <Stack spacing={2}>
              {cohort.participants.map((p) => (
                <Stack key={p.id} direction="row" alignItems="center" spacing={1.5}>
                  <Avatar sx={{ bgcolor: 'var(--color-primary-main)', width: 32, height: 32 }}>{p.initials}</Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 'var(--font-weight-medium)' }}>
                    {p.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Button variant="outlined" sx={{ mt: 3 }}>
              View Participants
            </Button>
          </Grid>

          {/* Column 3: Sessions */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Sessions
            </Typography>
            <Stack spacing={2}>
              <Box>
                <LinearProgress variant="determinate" value={50} sx={{ height: 8, borderRadius: 'var(--radius-full)' }} />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
                  100%
                </Typography>
              </Box>
              {cohort.sessions.map((s) => (
                <Stack key={s.id} direction="row" alignItems="center" spacing={1.5}>
                  <CheckCircleIcon color="primary" />
                  <Typography variant="body2">
                    {s.name}: {s.datetime} {s.duration}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Button variant="outlined" sx={{ mt: 3 }}>
              View Session Notes
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}