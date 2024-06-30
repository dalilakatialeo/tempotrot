import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import searchPageStyles from '../style/searchPageStyles';

const SPOTIFY_ACCESS_TOKEN = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
function SearchPage() {
  const navigate = useNavigate();

  const [songInput, setSongInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setSongInput(event.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      if (!songInput.trim()) {
        setErrorMessage(
          'Please enter a song and artist in the format "song - artist".'
        );
        setTimeout(() => {
          setErrorMessage('');
        }, 2000);
        return;
      }

      const [song, artist] = songInput.split('-').map((s) => s.trim());

      const { trackId, trackName, trackArtist } = await fetchTrackId(
        song,
        artist
      );
      const bpm = await fetchTrackBpm(trackId);

      navigate('/bpm-results', { state: { bpm, trackName, trackArtist } });
    }
  };

  const fetchTrackId = async (song, artist) => {
    const query = encodeURIComponent(`track:${song} artist:${artist}`);
    const accessToken = SPOTIFY_ACCESS_TOKEN;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
      {
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) throw new Error('Search request failed');

    const data = await response.json();
    const trackId = data.tracks.items[0].id;
    const trackName = data.tracks.items[0].name;
    const trackArtist = data.tracks.items[0].artists[0].name;
    return { trackId, trackName, trackArtist };
  };

  const fetchTrackBpm = async (trackId) => {
    const accessToken = SPOTIFY_ACCESS_TOKEN;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    try {
      // Fetching track's audio features, which includes BPM
      const response = await fetch(
        `https://api.spotify.com/v1/audio-features/${trackId}`,
        {
          method: 'GET',
          headers: headers,
        }
      );

      if (!response.ok) throw new Error('Failed to fetch track audio features');

      const data = await response.json();
      const bpm = Math.ceil(data.tempo);

      return bpm;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
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
          placeholder="Search for a song... (e.g. 'Frida - Holy Holy')"
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
      {errorMessage && (
        <div style={{ color: '#f000d4', marginTop: '5%', fontSize: '1rem' }}>
          {errorMessage}
        </div>
      )}
    </Box>
  );
}

export default SearchPage;
