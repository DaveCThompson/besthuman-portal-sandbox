// src/components/FAQAccordion.tsx
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FAQItem } from '../types';

interface FAQAccordionProps {
  item: FAQItem;
}

export default function FAQAccordion({ item }: FAQAccordionProps) {
  return (
    <Accordion
      disableGutters // Prevents default margins
      sx={{
        backgroundColor: 'transparent',
        borderBottom: '1px solid var(--color-border-secondary)',
        // Ensure consistent margin regardless of state to prevent jumps
        '&.Mui-expanded': {
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          // Set a consistent vertical padding for the summary content itself
          '& .MuiAccordionSummary-content': {
            my: 'var(--space-md)',
          },
        }}
      >
        <Typography variant="h6" sx={{ color: 'var(--color-primary-main)' }}>
          {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0, pb: 'var(--space-lg)' }}>
        {Array.isArray(item.answer) ? (
          item.answer.map((line, index) =>
            index === 0 ? (
              <Typography key={index} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {line}
              </Typography>
            ) : (
              <Link key={index} href="#" underline="hover" sx={{ display: 'block', mb: 0.5 }}>
                {line}
              </Link>
            ),
          )
        ) : (
          <Typography variant="body1" color="text.secondary">
            {item.answer}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
}