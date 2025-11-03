// src/layouts/Sidebar.tsx
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

// Import MUI Rounded Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

import { AnimatedBestHumanLogo } from '../assets/AnimatedBestHumanLogo';

// UPDATED: Sidebar width changed to 13rem (208px)
const drawerWidth = '13rem';

const mainNavItems = [
  { text: 'Home', path: '/', ActiveIcon: HomeRoundedIcon, InactiveIcon: HomeOutlinedIcon },
  { text: 'Profile', path: '/profile', ActiveIcon: AccountCircleRoundedIcon, InactiveIcon: AccountCircleOutlinedIcon },
  { text: 'Sessions', path: '/sessions', ActiveIcon: CalendarTodayRoundedIcon, InactiveIcon: CalendarTodayOutlinedIcon },
  { text: 'Tasks', path: '/tasks', ActiveIcon: CheckCircleRoundedIcon, InactiveIcon: CheckCircleOutlineOutlinedIcon },
  { text: 'Resources', path: '/resources', ActiveIcon: SchoolRoundedIcon, InactiveIcon: SchoolOutlinedIcon },
  { text: 'FAQ', path: '/faq', ActiveIcon: HelpRoundedIcon, InactiveIcon: HelpOutlineOutlinedIcon },
  { text: 'Style Guide', path: '/style-guide', ActiveIcon: PaletteRoundedIcon, InactiveIcon: PaletteOutlinedIcon },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid var(--color-border-secondary)',
          backgroundColor: 'var(--color-background-secondary)',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            // UPDATED: Horizontal padding is now 20px (1.25rem)
            px: 'var(--spacing-5)',
            borderBottom: '1px solid var(--color-border-secondary)',
            flexShrink: 0,
            backgroundColor: 'var(--color-background-secondary)',
          }}
        >
          <AnimatedBestHumanLogo
            sx={{
              height: '3rem',
              cursor: 'pointer',
              width: 'auto',
            }}
          />
        </Box>

        {/* Navigation List */}
        <List sx={{ flexGrow: 1, p: 'var(--space-sm)', pt: 'var(--space-md)' }}>
          {mainNavItems.map((item) => {
            const { ActiveIcon, InactiveIcon } = item;
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 'var(--space-xs)' }}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  end={item.path === '/'}
                  sx={{
                    // UPDATED: Horizontal padding is now 20px (1.25rem)
                    padding: 'var(--space-sm) var(--spacing-5)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-tertiary)',
                    border: '1px solid transparent',
                    transition: 'background-color 200ms, color 200ms',

                    '.inactive-icon': { display: 'block' },
                    '.active-icon': { display: 'none' },

                    '&:hover': {
                      backgroundColor: 'var(--color-control-bg-secondary-hover)',
                      color: 'var(--color-text-secondary)',
                      '& .MuiSvgIcon-root': {
                        fontVariationSettings: "'wght' 500",
                      },
                    },
                    '&.active': {
                      backgroundColor: 'var(--color-control-bg-selected)',
                      color: 'var(--color-control-fg-selected)',
                      border: '1px solid var(--color-control-border-selected)',
                      '.inactive-icon': { display: 'none' },
                      '.active-icon': { display: 'block' },
                      '& .MuiListItemText-primary': {
                        fontWeight: 'var(--font-weight-bold)',
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'var(--color-control-fg-selected)',
                      },
                      '& .MuiSvgIcon-root': {
                        fontVariationSettings: "'wght' 500",
                      },
                    },
                    '&.active:hover': {
                      backgroundColor: 'var(--color-control-bg-selected-hover)',
                      color: 'var(--color-control-fg-selected-hover)',
                      border: '1px solid var(--color-control-border-selected-hover)',
                      '& .MuiListItemIcon-root': {
                        color: 'var(--color-control-fg-selected-hover)',
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                    <ActiveIcon className="active-icon" />
                    <InactiveIcon className="inactive-icon" />
                  </ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 'inherit', fontSize: 'var(--font-size-md)' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* Sign Out Section */}
        <Box sx={{ p: 'var(--space-sm)' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: 'var(--space-sm) var(--spacing-3)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-tertiary)' }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Sign out" primaryTypographyProps={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-md)' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}