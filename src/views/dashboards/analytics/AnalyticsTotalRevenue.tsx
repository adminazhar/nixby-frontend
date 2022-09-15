// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const AnalyticsTotalRevenue = () => {

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            $42.5k
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'error.main' }}>
            -22%
          </Typography>
        </Box>
        <Typography variant='body2'>Total Revenue</Typography>
      </CardContent>
    </Card>
  )
}

export default AnalyticsTotalRevenue
