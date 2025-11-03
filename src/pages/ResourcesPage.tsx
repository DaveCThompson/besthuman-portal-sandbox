// src/pages/ResourcesPage.tsx
import { useState } from 'react';
import { Box, Grid, Stack, ToggleButtonGroup, Typography } from '@mui/material';
import { mockResources } from '../data/mockData';
import ResourceCard from '../components/ResourceCard';
import type { ResourceType } from '../types';
import { StyledToggleButton, StyledTabContainer } from '../components/StyledTabs';

// CORRECTED: Ripple opacity is now 0.9 for stronger feedback.
const rippleProps = {
  TouchRippleProps: {
    style: {
      color: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

export default function ResourcesPage() {
  const [filter, setFilter] = useState<ResourceType | 'all'>('all');

  const handleFilterChange = (_event: React.MouseEvent<HTMLElement>, newFilter: ResourceType | 'all' | null) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const filteredResources = mockResources.filter((resource) => {
    if (filter === 'all') return true;
    return resource.type === filter;
  });

  return (
    <Stack spacing={'var(--space-lg)'} alignItems="flex-start">
      <Box sx={{ alignSelf: 'stretch' }}> {/* Allow this header to stretch full-width */}
        <Typography variant="h5" sx={{ color: 'var(--color-primary-main)' }}>
          Resources Library
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Curated articles, videos, and tools to support your growth.
        </Typography>
      </Box>

      <StyledTabContainer>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="resource filters"
          sx={{ gap: 'var(--space-xs)' }}
        >
          <StyledToggleButton value="all" aria-label="all resources" {...rippleProps}>
            All
          </StyledToggleButton>
          <StyledToggleButton value="article" aria-label="articles" {...rippleProps}>
            Articles
          </StyledToggleButton>
          <StyledToggleButton value="video" aria-label="videos" {...rippleProps}>
            Videos
          </StyledToggleButton>
          <StyledToggleButton value="worksheet" aria-label="worksheets" {...rippleProps}>
            Worksheets
          </StyledToggleButton>
        </ToggleButtonGroup>
      </StyledTabContainer>

      <Grid container spacing={3}>
        {filteredResources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}