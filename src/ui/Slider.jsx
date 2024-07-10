import React, { useState } from 'react';
import { Slider, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#088269',
    },
    '&:hover fieldset': {
      borderColor: '#088269',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#088269',
    },
  },
});

const PriceSlider = () => {
  const [value, setValue] = useState([20000, 950000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box onClick={(e) => e.stopPropagation()} sx={{ width: 300, margin: '0 auto' }}>
      <Typography variant="h6" sx={{ mb: 4, textAlign: 'start' }}>Цена</Typography>
      <Box display="flex" justifyContent="space-between" gap={2}>
        <CustomTextField
          onClick={(e) => e.stopPropagation()}
          label="От"
          value={value[0].toLocaleString()}
          variant="outlined"
          size="small"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          onClick={(e) => e.stopPropagation()}
          label="До"
          value={value[1].toLocaleString()}
          variant="outlined"
          size="small"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Slider
        onClick={(e) => e.stopPropagation()}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={20000}
        max={950000}
        step={10000}
        sx={{ mt: 3, color: '#088269' }}
      />
    </Box>
  );
};

export default PriceSlider;
