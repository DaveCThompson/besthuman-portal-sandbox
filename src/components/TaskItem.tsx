// src/components/TaskItem.tsx
import { Box, Button, Card, Link, Stack, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onActionClick: () => void;
}

const statusConfig = {
  completed: {
    Icon: CheckCircleRoundedIcon,
    color: 'var(--color-success-main)',
  },
  active: {
    Icon: PendingActionsRoundedIcon,
    color: 'var(--color-info-main)',
  },
  overdue: {
    Icon: WarningAmberRoundedIcon,
    color: 'var(--color-error-main)',
  },
};

export default function TaskItem({ task, onActionClick }: TaskItemProps) {
  const { Icon, color } = statusConfig[task.status];

  return (
    // CORRECTED: Shadow is overridden to the smaller 'sm' variant
    <Card sx={{ p: 'var(--space-lg)', boxShadow: 'var(--shadow-sm)' }}>
      <Stack direction="row" spacing={3} alignItems="center">
        <Icon sx={{ fontSize: '2.5rem', color }} />
        <Box flexGrow={1}>
          <Typography variant="h6">{task.title}</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {task.timeToComplete}
            </Typography>
            {task.signedOn && (
              <Typography variant="body2" color="text.secondary">
                {task.signedOn}
              </Typography>
            )}
          </Stack>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          {task.secondaryAction && (
            <Link href={task.secondaryAction.url} underline="hover" variant="button">
              {task.secondaryAction.label}
            </Link>
          )}
          <Button
            variant="contained"
            color="primary"
            disabled={task.status === 'completed'}
            onClick={onActionClick}
          >
            {task.action.label}
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}