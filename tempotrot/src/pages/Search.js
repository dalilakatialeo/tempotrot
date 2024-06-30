import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import searchPageStyles from '../style/searchPageStyles';

function SearchPage() {
  const [songInput, setSongInput] = useState('');

  const handleInputChange = (event) => {
    setSongInput(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      console.log(songInput);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
      }}
    >
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="search"
        name="search"
        placeholder="Search for a song"
        autoComplete="off"
        value={songInput}
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
        sx={searchPageStyles.textField}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          ml: 2,
          height: 'flex-end',
          backgroundColor: '#05b6d4',
          '&:hover': {
            backgroundColor: '#f000d4',
          },
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

export default SearchPage;
