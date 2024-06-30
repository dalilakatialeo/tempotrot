import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import LogoComponent from '../components/logo';

function BPMResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bpm, trackName, trackArtist } = location.state || {};

  return (
    <div>
      <LogoComponent />
      {trackName && (
        <p>
          {`'${trackName}'`} by {trackArtist}
        </p>
      )}
      {bpm && <p>has a BPM of {bpm}</p>}
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          mt: 5,
          ml: 2,
          height: 'flex-end',
          backgroundColor: '#05b6d4',
          '&:hover': {
            backgroundColor: '#f000d4'
          }
        }}
      >
        Search again{' '}
      </Button>
    </div>
  );
}
export default BPMResultsPage;
