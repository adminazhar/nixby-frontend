// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const AnalyticsOverview = () => {

  return (
    <Card>
      <CardContent sx={{ '& .apexcharts-canvas .apexcharts-text': { fontWeight: 600, fontSize: '1rem' } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            $67.1k
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'success.main' }}>
            +49%
          </Typography>
        </Box>
        <Typography variant='body2'>Overview</Typography>
      </CardContent>
    </Card>
  )
}

export default AnalyticsOverview
