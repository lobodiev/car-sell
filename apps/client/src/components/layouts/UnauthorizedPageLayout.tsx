import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

/**
 * Represents the layout of a page.
 * @interface IPageLayout
 * @property {React.ReactNode} [children] - The child elements of the page layout.
 * @property {string} [title] - The title of the page.
 */
interface IPageLayout {
  children?: React.ReactNode;
  title?: string;
}

/**
 * Represents the unauthorized page layout component.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 *
 * @returns {React.ReactNode} - The rendered unauthorized page layout.
 */
const UnauthorizedPageLayout: React.FC<IPageLayout> = ({
  children,
}: IPageLayout): React.ReactNode => {
  return (
    <>
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                xs={9}
              >
                <DirectionsCarFilledIcon
                  sx={{ display: { xs: '1', md: 'flex' }, mr: 1 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Car Sell
                </Typography>
              </Grid>
              <Grid item xs={3} spacing={2}>
                <Button variant="contained" color="secondary">
                  Sell your car
                </Button>
                <Button variant="contained" color="secondary">
                  LogIn
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      {/*<Container component="main">*/}
      {/*<Grid container spacing={0}>*/}
      {/*  <Grid item xs={3}>*/}
      {children}
      <Box component="footer">1</Box>
      {/*  </Grid>*/}
      {/*</Grid>*/}
      {/*</Container>*/}
    </>
  );
};

export default UnauthorizedPageLayout;
