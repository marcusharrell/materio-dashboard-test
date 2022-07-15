import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
// ** Icons Imports
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'

const ModeToggler = props => {
  // ** Props


  const { settings, saveSettings } = props

  const handleModeChange = mode => {
    saveSettings({ ...settings, mode })
  }
  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <Tooltip title={settings.mode === 'light' ? "Change to Night Mode" : 'Change to Light Mode'}>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
        {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
      </IconButton>
      </Tooltip>
  )
}

export default ModeToggler
