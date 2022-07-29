// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'



const MainContainerCard = () => {
  return (
    <Card sx={{borderRadius: 4.5, height: 500, width: 1500}}>
     
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Box textAlign={'center'}>
      <Button variant='contained'>
          Search
        </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default MainContainerCard
