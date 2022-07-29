// ** MUI Imports
import * as React from 'react'
import { Input } from '@mui/material'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ButtonGroup } from '@mui/material'
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

const MainContainerCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ borderRadius: 4.5, height: 500, width: 1500 }}>
      <CardHeader>
        <TextField />
      </CardHeader>
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextField sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }} />
        </Box>
        <Box sx={{ justifyContent: 'space-between' }} textAlign={'center'}>
  
            <ButtonGroup variant='outlined' aria-label='outlined button group'>
              <Button
                id='length-button'
                aria-haspopup='true'
                onClick={handleClick}
                aria-expanded={open ? 'true' : undefined}
                aria-controls={open ? 'length-menu' : undefined}
              >
                Length of class
              </Button>
              <Menu
                id='length-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'length-button'
                }}
              >
                <MenuItem onClick={handleClose}>1-2 Minutes</MenuItem>
                <MenuItem onClick={handleClose}>5-10 Minutes</MenuItem>
                <MenuItem onClick={handleClose}>15-30 Minutes</MenuItem>
              </Menu>
              <Button
                id='mood-button'
                aria-controls={open ? 'mood-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Choose Mood
              </Button>
              <Menu
                id='mood-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'mood-button'
                }}
              >
                <MenuItem onClick={handleClose}>Calm</MenuItem>
                <MenuItem onClick={handleClose}>Build Energy</MenuItem>
                <MenuItem onClick={handleClose}>Release</MenuItem>
              </Menu>
            </ButtonGroup>

        </Box>
      </CardContent>
    </Card>
  )
}

export default MainContainerCard
