import React from 'react';

import UnauthorizedPageLayout from '../components/layouts/UnauthorizedPageLayout.tsx';
// import { useFetchAllCarsQuery } from '../api/services/CarService.ts';

const HomePage: React.FC = () => {
  // const { data, error, isLoading } = useFetchAllCarsQuery();

  // console.log(data, error, isLoading);

  return (
    <>
      <UnauthorizedPageLayout>
        {/*<Box component="section">*/}
        {/*  <Typography variant="h3">Sell Cars</Typography>*/}
        {/*  <Typography variant="body1">*/}
        {/*    The product who change your imagine about cars*/}
        {/*  </Typography>*/}
        {/*</Box>*/}
        {/*<Box component="section">*/}
        {/*  <Typography variant="h3">Why we better?</Typography>*/}
        {/*  <Typography variant="body1">*/}
        {/*    The product who change your imagine about cars*/}
        {/*  </Typography>*/}
        {/*  <Typography variant="body1">*/}
        {/*    The product who change your imagine about cars*/}
        {/*  </Typography>*/}
        {/*  <Typography variant="body1">*/}
        {/*    The product who change your imagine about cars*/}
        {/*  </Typography>*/}
        {/*</Box>*/}

        {/*{data?.map((car) => {*/}
        {/*  return <div key={car.id}>{car.brand}</div>;*/}
        {/*})}*/}
      </UnauthorizedPageLayout>
    </>
  );
};

export default HomePage;
