// src/pages/TasksPage.tsx
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { mockTasks } from '../data/mockData';
import TaskItem from '../components/TaskItem';
import TaskCompletionModal from '../components/TaskCompletionModal';

export default function TasksPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Stack spacing={'var(--space-lg)'}>
        <Box>
          <Typography variant="h5" sx={{ color: 'var(--color-primary-main)' }}>
            Action Items
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A quick look at your to-do's.
          </Typography>
        </Box>
        <Stack spacing={2}>
          {mockTasks.map((task) => (
            <TaskItem key={task.id} task={task} onActionClick={handleOpenModal} />
          ))}
        </Stack>
      </Stack>
      <TaskCompletionModal open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}