import React from 'react';
import { Toolbar, AppBar, Container } from '@mui/material';
/**
 * Represents the structure and layout of a page.
 *
 * @interface
 */
interface IPageLayout {
  children?: React.ReactNode;
  title?: string;
}

/**
 * Represents the authorized page layout component.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to render within the page layout.
 * @returns {React.ReactNode} - The rendered page layout component.
 */
const AuthorizedPageLayout: React.FC<IPageLayout> = ({
  children,
}: IPageLayout): React.ReactNode => {
  return (
    <>
      <AppBar position="static" color="secondary" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar />
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default AuthorizedPageLayout;
