import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation

import { Button } from '@mui/material';
import LogoComponent from '../components/logo';

function BPMResultsPage() {
  const location = useLocation(); // Initialize useLocation
  const navigate = useNavigate(); // Initialize useNavigate
  const { bpm, trackName, trackArtist } = location.state || {}; // Access bpm from state

  // Now you can use bpm as needed in BPMResultsPage
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
        onClick={() => navigate('/')} // Use navigate function on click
        sx={{
          mt: 5,
          ml: 2,
          height: 'flex-end',
          backgroundColor: '#05b6d4',
          '&:hover': {
            backgroundColor: '#f000d4',
          },
        }}
      >
        Search again{' '}
      </Button>
    </div>
  );
}
export default BPMResultsPage;
