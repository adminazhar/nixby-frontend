// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const AnalyticsPerformance = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Performance'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          pt: [`${theme.spacing(6)} !important`, `${theme.spacing(6)} !important`, `${theme.spacing(0)} !important`],
          pb: [`${theme.spacing(8)} !important`, `${theme.spacing(8)} !important`, `${theme.spacing(5)} !important`],
          '& .apexcharts-canvas .apexcharts-datalabel': { fill: theme.palette.text.secondary },
          '& .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text': {
            letterSpacing: '0.4px',
            color: `${theme.palette.text.secondary} !important`
          }
        }}
      >
      </CardContent>
    </Card>
  )
}

export default AnalyticsPerformance
