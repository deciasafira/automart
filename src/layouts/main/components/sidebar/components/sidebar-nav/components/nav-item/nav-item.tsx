/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useEffect, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

interface Props {
  readonly items: PageItem[]
  readonly title: string
}

const NavItem = ({ title, items }: Props) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items.find((i) => i.href === activeLink);

  return (
    <Box>
      <Accordion
        disableGutters={true}
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            color={hasActiveLink() ? 'primary' : 'text.primary'}
            fontWeight={hasActiveLink() ? 600 : 400}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container={true} spacing={1}>
            {items.map((p, i) => (
              <Grid item={true} key={p.id || i} xs={12}>
                <Button
                  component="a"
                  fullWidth={true}
                  href={p.href}
                  size="large"
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
                    ? (
                      <Box
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
                      </Box>)
                    : null}
                </Button>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.displayName = 'NavItem';
export default NavItem;
