// src/components/DailyQuoteCard.tsx
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function DailyQuoteCard() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 'var(--space-md)', color: 'var(--color-primary-main)' }}>
        Daily Quote
      </Typography>
      <Box
        sx={{
          position: 'relative',
          // UPDATED: Padding and background styles to match Figma
          p: 'var(--space-md) var(--space-lg)',
          pl: 'var(--space-3xl)',
          backgroundColor: 'var(--color-background-secondary-subtle)',
          border: '1px solid var(--color-border-primary)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <FormatQuoteIcon
          sx={{
            position: 'absolute',
            left: 'var(--space-sm)',
            top: 'var(--space-sm)',
            fontSize: '4rem',
            color: 'var(--color-border-secondary)',
            transform: 'translateY(-25%)',
          }}
        />
        <Typography variant="h4" component="blockquote" sx={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
          “In a fitting-in culture, people are held to one narrow standard rather an acknowledge for their unique gifts and contributions.”
          <Typography component="cite" sx={{ display: 'block', mt: 'var(--space-sm)', fontWeight: 'var(--font-weight-medium)' }}>
            – Brene Brown
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}