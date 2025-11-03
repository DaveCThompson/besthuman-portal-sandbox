// src/components/UserMenu.tsx
import { Chip } from '@mui/material';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

export default function UserMenu() {
  const hours = new Date().getHours();
  let greeting: string;
  let icon: JSX.Element;

  if (hours < 12) {
    greeting = 'Good morning, David!';
    icon = <CoffeeOutlinedIcon />;
  } else if (hours < 18) {
    greeting = 'Good afternoon, David!';
    icon = <WbSunnyOutlinedIcon />;
  } else {
    greeting = 'Good evening, David!';
    icon = <NightlightOutlinedIcon />;
  }

  return (
    <Chip
      icon={icon}
      label={greeting}
      sx={{
        // CORRECTED: height: 'auto' is critical to override the default fixed height.
        // The padding on the label now dictates the height, creating a perfect pill shape.
        height: 'auto',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--p-theme-25)',
        border: '1px solid var(--p-theme-100)',
        color: 'var(--p-theme-800)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-sm)',
        '& .MuiChip-label': {
          py: 'var(--space-sm)',
          px: 'var(--space-md)',
          pl: 'var(--space-xs)',
        },
        '& .MuiChip-icon': {
          color: 'var(--p-theme-600)',
          marginLeft: 'var(--space-md)',
          marginRight: 0,
        },
      }}
    />
  );
}