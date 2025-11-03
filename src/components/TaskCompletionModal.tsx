// src/components/TaskCompletionModal.tsx
import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface TaskCompletionModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TaskCompletionModal({ open, onClose }: TaskCompletionModalProps) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="task-completion-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'var(--color-background-paper)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          p: 'var(--space-xl)',
          textAlign: 'center',
        }}
      >
        <Stack spacing={2} alignItems="center">
          <CheckCircleRoundedIcon sx={{ fontSize: '4rem', color: 'var(--color-success-main)' }} />
          <Typography id="task-completion-title" variant="h5" component="h2">
            Task Completed!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            You've signed the agreement. Great job staying on top of things!
          </Typography>
          <Button variant="contained" color="primary" onClick={onClose} sx={{ mt: 'var(--space-md)' }}>
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}