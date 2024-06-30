const searchPageStyles = {
  textField: {
    width: '200%',
    my: 0,
    mt: 'auto',
    mb: 'auto',
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '.MuiInputLabel-root': {
      color: 'white',
      '&.Mui-focused': {
        color: 'white'
      }
    },
    '.MuiInputBase-input': {
      color: 'white'
    }
  }
};

export default searchPageStyles;
