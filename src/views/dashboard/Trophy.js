// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import { margin } from '@mui/system'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  bottom: 20,
  height: 98,
  display: 'block',
  marginLeft: 'auto'

})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative', borderRadius: 4.5 }}>
      <CardHeader
        title={`Congratulations Mr. Wilson's Class! 🥳`}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Your class watched the most videos
            </Box>{' '}
             this month!
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent>
        <Typography variant='h4' sx={{ my: 3, color: 'primary.main' }}>
          23 Videos Watched
          <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
        </Typography>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
       
      </CardContent>
    </Card>
  )
}

export default Trophy
