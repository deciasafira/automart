import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

const ALPHA = 0.2;
const ThemeModeToggler = () => {
  const theme = useTheme();
  const { themeToggler } = theme;
  const { mode } = theme.palette;

  return (
    <Button
      aria-label="Dark mode toggler"
      color={mode === 'light' ? 'primary' : 'secondary'}
      sx={{
        borderColor: alpha(theme.palette.divider, ALPHA),
        borderRadius: 2,
        minWidth: 'auto',
        padding: 0.5
      }}
      variant="outlined"
      onClick={() => themeToggler()}
    >
      {mode === 'light'
        ? (
          <svg
            fill="none"
            height={20}
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} />
          </svg>
        )
        : (
          <svg
            fill="none"
            height={20}
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} />
          </svg>
        )}
    </Button>
  );
};

ThemeModeToggler.displayName = 'ThemeModeToggler';
export default ThemeModeToggler;
