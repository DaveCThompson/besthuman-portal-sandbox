// src/components/ResourceCard.tsx
import { Card, CardContent, CardMedia, Chip, Link, Stack, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import type { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const typeConfig = {
  article: { label: 'Article', color: 'primary' as const },
  video: { label: 'Video', color: 'success' as const },
  worksheet: { label: 'Worksheet', color: 'info' as const },
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const config = typeConfig[resource.type];
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia component="img" height="180" image={resource.thumbnailUrl} alt={resource.title} />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Chip label={config.label} color={config.color} size="small" />
        </Stack>
        <Typography gutterBottom variant="h6" component="h3" sx={{ flexGrow: 1 }}>
          {resource.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {resource.description}
        </Typography>
        <Link
          href={resource.url}
          variant="button"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--color-primary-main)',
            mt: 'auto',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: 'var(--color-primary-dark)',
            },
          }}
        >
          View Resource <ArrowOutwardIcon sx={{ fontSize: '1rem', ml: 0.5 }} />
        </Link>
      </CardContent>
    </Card>
  );
}