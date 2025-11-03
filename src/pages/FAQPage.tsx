// src/pages/FAQPage.tsx
import { useState } from 'react';
import { Box, Button, Stack, Tabs } from '@mui/material';
import { mockFaqs } from '../data/mockData';
import type { FAQCategory } from '../types';
import FAQAccordion from '../components/FAQAccordion';
import { StyledTab, StyledTabContainer } from '../components/StyledTabs';

// CORRECTED: Ripple opacity is now 0.9 for stronger feedback.
const rippleProps = {
  TouchRippleProps: {
    style: {
      color: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<FAQCategory>('Mentorship');

  const handleChange = (_event: React.SyntheticEvent, newValue: FAQCategory) => {
    setActiveTab(newValue);
  };

  const filteredFaqs = mockFaqs.filter((faq) => faq.category === activeTab);

  return (
    <Stack spacing={'var(--space-lg)'} alignItems="flex-start">
      <StyledTabContainer>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="faq categories"
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
          <StyledTab value="Coaching" label="Coaching" {...rippleProps} />
          <StyledTab value="Mentorship" label="Mentorship" {...rippleProps} />
        </Tabs>
      </StyledTabContainer>

      <Box sx={{ width: '100%' }}>
        {filteredFaqs.map((item) => (
          <FAQAccordion key={item.id} item={item} />
        ))}
      </Box>

      <Box>
        <Button variant="contained" color="primary">
          Submit a Question
        </Button>
      </Box>
    </Stack>
  );
}