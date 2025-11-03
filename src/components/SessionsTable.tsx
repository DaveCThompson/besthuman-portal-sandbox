// src/components/SessionsTable.tsx
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import type { Session } from '../types';
import StatusChip from './StatusChip';

interface SessionsTableProps {
  title: string;
  sessions: Session[];
}

export default function SessionsTable({ title, sessions }: SessionsTableProps) {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 'var(--spacing-3)', color: 'var(--color-primary-main)' }}>
        {title}
      </Typography>
      <TableContainer
        component={Box}
        sx={{
          border: '1px solid var(--color-border-secondary)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--color-background-paper)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <Table sx={{ minWidth: 650, width: '100%' }}>
          {/* UPDATED: Table header background changed to white (bg/primary) */}
          <TableHead sx={{ backgroundColor: 'var(--color-background-paper)' }}>
            <TableRow>
              <TableCell sx={{ color: 'var(--color-text-quaternary)', fontWeight: 'var(--font-weight-semibold)' }}>Session</TableCell>
              <TableCell sx={{ color: 'var(--color-text-quaternary)', fontWeight: 'var(--font-weight-semibold)' }}>When</TableCell>
              <TableCell sx={{ color: 'var(--color-text-quaternary)', fontWeight: 'var(--font-weight-semibold)' }}>Who</TableCell>
              <TableCell sx={{ color: 'var(--color-text-quaternary)', fontWeight: 'var(--font-weight-semibold)' }}>Status</TableCell>
              <TableCell sx={{ color: 'var(--color-text-quaternary)', fontWeight: 'var(--font-weight-semibold)' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session) => (
              <TableRow
                key={session.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  // UPDATED: All rows now have the subtle grey background
                  backgroundColor: 'var(--color-background-secondary-subtle)',
                }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  {session.name}
                </TableCell>
                <TableCell sx={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'inherit', color: 'var(--color-text-primary)' }}>{session.datetime}</Typography>
                  <Typography variant="caption" color="text.secondary">{session.duration}</Typography>
                </TableCell>
                <TableCell sx={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'inherit', color: 'var(--color-text-primary)' }}>{session.coach}</Typography>
                  <Typography variant="caption" color="text.secondary">1:1 with {session.participants[0].name}</Typography>
                </TableCell>
                <TableCell sx={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  <StatusChip status={session.status} />
                </TableCell>
                <TableCell sx={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary">Join</Button>
                    <Button variant="outlined">View notes</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}