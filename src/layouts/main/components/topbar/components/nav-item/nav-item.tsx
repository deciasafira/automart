/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useEffect, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

interface Props {
  readonly colorInvert?: boolean
  readonly id: string
  readonly items: PageItem[]
  readonly title: string
}

const NavItem = ({
  title,
  id,
  items,
  colorInvert = false
}: Props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, popoverId: string): void => {
    setAnchorEl(event.currentTarget);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items.find((i) => i.href === activeLink);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        alignItems="center"
        aria-describedby={id}
        display="flex"
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e, id)}
      >
        <Typography
          color={linkColor}
          fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400}
        >
          {title}
        </Typography>
        <ExpandMoreIcon
          sx={{
            color: linkColor,
            height: 16,
            marginLeft: theme.spacing(1 / 4),
            transform: openedPopoverId === id ? 'rotate(180deg)' : 'none',
            width: 16
          }} />
      </Box>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        sx={{
          '.MuiPaper-root': {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginTop: 2,
            maxWidth: items.length > 12 ? 350 : 250,
            padding: 2
          }
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'top'
        }}
        onClose={handleClose}
      >
        <Grid container={true} spacing={0.5}>
          {items.map((p, i) => (
            <Grid item={true} key={i} xs={items.length > 12 ? 6 : 12}>
              <Button
                component="a"
                fullWidth={true}
                href={p.href}
                sx={{
                  backgroundColor:
                    activeLink === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  color:
                    activeLink === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  fontWeight: activeLink === p.href ? 600 : 400,
                  justifyContent: 'flex-start'
                }}
              >
                {p.title}
                {p.isNew
                  ? <Box
                      bgcolor="primary.main"
                      borderRadius={1}
                      display="inline-flex"
                      marginLeft={2}
                      padding={0.5}
                  >
                    <Typography
                      sx={{ color: 'common.white', lineHeight: 1 }}
                      variant="caption"
                    >
                      new
                    </Typography>
                  </Box>
                  : null}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </Box>
  );
};

NavItem.displayName = 'NavItem';
export default NavItem;
