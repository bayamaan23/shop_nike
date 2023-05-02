import { CircularProgress, LinearProgress, Pagination, Stack } from '@mui/material';
import React from 'react'
import ProductsList from '../components/ProductsList';

function HomePage() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <ProductsList />
      </div>
    </div>
  );
}

export default HomePage