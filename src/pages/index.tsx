import React from 'react';
import { Box, Typography } from '@mui/material';

import UnauthorizedPageLayout from '../components/layouts/UnauthorizedPageLayout.tsx';

const HomePage = (): React.ReactNode => {
  return (
    <>
      <UnauthorizedPageLayout>
        <Box component="section">
          <Typography variant="h3">Sell Cars</Typography>
          <Typography variant="body1">
            The product who change your imagine about cars
          </Typography>
        </Box>
        <Box component="section">
          <Typography variant="h3">Why we better?</Typography>
          <Typography variant="body1">
            The product who change your imagine about cars
          </Typography>
          <Typography variant="body1">
            The product who change your imagine about cars
          </Typography>
          <Typography variant="body1">
            The product who change your imagine about cars
          </Typography>
        </Box>
      </UnauthorizedPageLayout>
    </>
  );
};

export default HomePage;
