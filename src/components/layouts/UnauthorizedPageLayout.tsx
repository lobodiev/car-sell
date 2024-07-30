import React from 'react';
import { Grid, Container } from '@mui/material';

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
      <Container component="main" maxWidth="xs">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UnauthorizedPageLayout;
