// src/components/StatusChip.tsx
import { Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { SessionStatus } from '../types';

interface StatusChipProps {
  status: SessionStatus;
}

const statusConfig = {
  Completed: {
    label: 'Completed',
    color: 'success',
    icon: <CheckCircleIcon />,
  },
  Scheduled: {
    label: 'Scheduled',
    color: 'info',
    icon: <CheckCircleIcon />, // Placeholder icon
  },
  Pending: {
    label: 'Pending',
    color: 'warning',
    icon: <CheckCircleIcon />, // Placeholder icon
  },
} as const;

export default function StatusChip({ status }: StatusChipProps) {
  const config = statusConfig[status];

  return (
    <Chip
      icon={config.icon}
      label={config.label}
      color={config.color as 'success' | 'info' | 'warning'}
      variant="filled"
      sx={{
        backgroundColor: `var(--color-background-${config.color}-subtle)`,
        color: `var(--color-control-fg-${config.color})`,
        '& .MuiChip-icon': {
          color: `var(--color-control-fg-${config.color})`,
        },
      }}
    />
  );
}