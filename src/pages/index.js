// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Import
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import MainContainerCard from 'src/views/dashboard/MainContainerCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import CardSupport from 'src/views/cards/CardSupport'
import CardMembership from 'src/views/cards/CardMembership'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardFacebook from 'src/views/cards/CardFacebook'

// ** Other MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Button from 'src/@core/theme/overrides/button'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
    
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <MainContainerCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
         
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          
          </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
