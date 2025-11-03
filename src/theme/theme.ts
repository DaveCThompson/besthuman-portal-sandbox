// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffb6b6',
      main: '#e1224c',
      dark: '#8f002a',
      contrastText: '#ffffff',
    },
    error: {
      light: '#fef2f2',
      main: '#e23e57',
      dark: '#ba2c43',
    },
    warning: {
      light: '#ffefc8',
      main: '#d36300',
      dark: '#a64014',
    },
    info: {
      light: '#d8f6ff',
      main: '#01849a',
      dark: '#016c7e',
    },
    success: {
      light: '#c0fdf0',
      main: '#018c7a',
      dark: '#006e60',
    },
    text: {
      primary: '#14221a',
      secondary: '#3e4b44',
      disabled: '#6f7b74',
    },
    background: {
      default: '#f6f6f7',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: 'var(--font-size-display-lg)', fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-display-lg)' },
    h2: { fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-lg)' },
    h3: { fontSize: 'var(--font-size-display-sm)', fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-display-sm)' },
    h4: { fontSize: 'var(--font-size-display-xs)', fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-display-xs)' },
    h5: { fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', lineHeight: 'var(--line-height-xl)' },
    h6: { fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', lineHeight: 'var(--line-height-lg)' },
    body1: { fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-md)' },
    body2: { fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-sm)' },
    button: { textTransform: 'none', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-sm)' },
    caption: { fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-xs)' },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    'var(--shadow-sm)', 'var(--shadow-sm)', 'var(--shadow-sm)',
    'var(--shadow-md)', 'var(--shadow-md)', 'var(--shadow-md)', 'var(--shadow-md)',
    'var(--shadow-lg)', 'var(--shadow-lg)', 'var(--shadow-lg)', 'var(--shadow-lg)',
    'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)',
    'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)',
    'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)', 'var(--shadow-xl)',
  ],
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: 'font-variation-settings 200ms ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'relative',
          outline: 'none',
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
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'var(--color-control-fg-on-solid)',
            backgroundColor: 'var(--color-control-bg-theme)',
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)',
            boxShadow: 'var(--shadow-deuomorphic)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-xs) var(--space-lg)',
            overflow: 'hidden',
            transition: 'background-image 200ms ease-out, background-color 200ms ease-out, box-shadow 150ms ease-out',
            '& .MuiTouchRipple-child': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover': {
              backgroundColor: 'var(--color-primary-main)',
              backgroundImage: 'var(--gradient-primary-hover)',
              '& .MuiSvgIcon-root': {
                fontVariationSettings: "'wght' 500",
              },
            },
            '&:active': {
              boxShadow: 'var(--shadow-deuomorphic-pressed), var(--shadow-deuomorphic)',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: 'var(--color-control-fg-secondary)',
            backgroundColor: 'var(--color-control-bg-secondary)',
            borderColor: 'var(--color-control-border-secondary)',
            boxShadow: 'var(--shadow-sm)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-xs) var(--space-lg)',
            overflow: 'hidden',
            transition: 'background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out',
            '& .MuiTouchRipple-child': {
              backgroundColor: 'var(--color-primary-main)',
              opacity: 0.1,
            },
            '&:hover': {
              color: 'var(--color-control-fg-secondary-hover)',
              backgroundColor: 'var(--color-control-bg-secondary-hover)',
              borderColor: 'var(--color-control-border-secondary-hover)',
              '& .MuiSvgIcon-root': {
                fontVariationSettings: "'wght' 500",
              },
            },
            '&:active': {
              color: 'var(--color-control-fg-secondary-pressed)',
              backgroundColor: 'var(--color-control-bg-secondary-pressed)',
              borderColor: 'var(--color-control-border-secondary-pressed)',
            },
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            color: 'var(--color-primary-main)',
            opacity: 0.1,
          },
        },
      },
    },
    // CORRECTED: Removed ineffective global overrides for Tab and ToggleButton ripples.
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-secondary)',
          boxShadow: 'var(--shadow-md)',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: 'var(--color-background-secondary-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-secondary)',
            transition: 'background-color 200ms ease, border-color 200ms ease',
            '&:hover': {
              backgroundColor: 'var(--color-background-tertiary)',
            },
            '&.Mui-focused': {
              backgroundColor: 'var(--color-background-paper)',
              borderColor: 'var(--color-primary-main)',
            },
            '&::before, &::after': {
              display: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            '&.Mui-focused': {
              color: 'var(--color-primary-main)',
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
  },
});