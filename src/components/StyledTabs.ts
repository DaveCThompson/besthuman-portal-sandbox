// src/components/StyledTabs.ts
import { styled } from '@mui/material/styles';
import { Tab, ToggleButton, Box } from '@mui/material';
import type { Theme } from '@mui/material';

// --- This is the single source of truth for the button/tab styling ---
const getTabStyles = (_theme: Theme) => ({
  textTransform: 'none',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md) !important',
  padding: 'var(--space-sm) var(--space-md)',
  color: 'var(--color-text-secondary)',
  transition: 'all 150ms ease-out',
  position: 'relative',
  outline: 'none',

  '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    marginLeft: 0,
    borderLeftWidth: '1px',
  },

  // --- States ---
  '&.Mui-selected': {
    backgroundColor: 'var(--color-background-paper)',
    color: 'var(--color-text-primary)',
    boxShadow: 'var(--shadow-sm)',
    borderColor: 'var(--color-border-secondary)',
    zIndex: 1,
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'var(--color-background-paper)',
  },
  '&:not(.Mui-selected):hover': {
    backgroundColor: 'var(--color-control-bg-tertiary-hover)',
    borderColor: 'var(--color-control-border-tertiary-hover)',
    color: 'var(--color-text-secondary-hover)',
  },

  // --- High-Craft, Keyboard-Only Focus Ring ---
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    borderRadius: 'var(--radius-lg)',
    border: '2px solid var(--color-focus-ring-standard)',
    opacity: 0,
    transition: 'opacity 150ms ease-in-out',
    pointerEvents: 'none',
  },
  '&.Mui-focusVisible::after': {
    opacity: 1,
  },
});

// --- EXPORTED STYLED COMPONENTS ---

/** A styled MUI Tab component for use within a Tabs container. */
export const StyledTab = styled(Tab)(({ theme }) => getTabStyles(theme));

/** A styled MUI ToggleButton for use within a ToggleButtonGroup. */
export const StyledToggleButton = styled(ToggleButton)(({ theme }) => getTabStyles(theme));


/** The styled container for the tab/button group. */
export const StyledTabContainer = styled(Box)(() => ({
  backgroundColor: 'var(--color-background-secondary)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--color-border-secondary)',
  padding: 'var(--space-xs)',
  display: 'inline-flex',
  alignItems: 'center',
}));