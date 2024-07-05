import React from 'react';
import { useState } from 'react';
import { Pagination, Stack } from '@mui/material';

const PaginationComp = ({ product, productPage, renderProduct }) => {
  
  
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * productPage;
  const endIndex = startIndex + productPage;

  const currentItems = product.slice(startIndex, endIndex);

  const handlePage = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(product.length / productPage);

  
  return (
    <>
      <div>
        {renderProduct(currentItems)}
      </div>

      <div className="flex mt-[30px] justify-center">
        <Stack spacing={3} direction="row" alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePage}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: '#088269',
                  color: 'white',
                },
                '&.Mui-selected': {
                  bgcolor: '#088269',
                  color: 'white',
                },
              },
            }}
          />
        </Stack>
      </div>
      
    </>
  );
};

export default PaginationComp;
