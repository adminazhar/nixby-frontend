// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CrmTotalProfit = () => {

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            $88.5k
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'error.main' }}>
            -18%
          </Typography>
        </Box>
        <Typography variant='body2'>Total Profit</Typography>
      </CardContent>
    </Card>
  )
}

export default CrmTotalProfit
