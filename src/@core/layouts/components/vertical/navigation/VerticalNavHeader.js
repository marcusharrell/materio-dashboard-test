// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import UserDropdown from '../../shared-components/UserDropdown'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import { right } from '@popperjs/core'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: '',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 100,
  lineHeight: 'normal',
  textTransform: "lowercase",
  color: theme.palette.text.secondary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
       <UserDropdown/>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
            <HeaderTitle variant='h5' sx={{ mr: 20, pt: 1}}>
            Welcome, Ms.Wilson {/* Will display name of teacher or user */}
           
            {/* <HeaderSubtitle sx={{ ml: 3}}>
              Inclusive and joyful movement videos for kids and teachers
              </HeaderSubtitle> */}
            </HeaderTitle >
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
