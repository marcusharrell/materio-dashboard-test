// ** MUI Imports
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

// ** Icons Imports


const MainContainerCard = () => {
  const [mood, setMood] = React.useState('');
  const [length, setLength] = React.useState('');
  const handleChange = (event) => {
    setMood(event.target.value);
  
  }
  const handleLength = (event) => {
    setLength(event.target.value);
  }

  return (
    <Card sx={{ borderRadius: 4.5, height: 500, width: 1500 }}>
      <CardHeader></CardHeader>
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Mood</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mood}
          label="Mood"
          onChange={handleChange}
        >
          <MenuItem value={10}>Calm</MenuItem>
          <MenuItem value={20}>Relax</MenuItem>
          <MenuItem value={30}>Release</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="length-label">Class Length</InputLabel>
        <Select
          labelId="length-label"
          id="length-select"
          value={length}
          label="Length"
          onChange={handleLength}
        >
          <MenuItem value={10}>1-5 Minutes</MenuItem>
          <MenuItem value={20}>5-15 Minutes</MenuItem>
          <MenuItem value={30}>15-30 Mintues</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </CardContent>
    </Card>
  )
}

export default MainContainerCard
