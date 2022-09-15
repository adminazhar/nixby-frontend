// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const EcommerceSalesThisMonth = () => {
  return (
    <Card>
      <CardContent sx={{ pb: '0 !important' }}>
        <Typography variant='h6' sx={{ mb: 2.5 }}>
          Sales this Month
        </Typography>
        <Typography variant='body2'>Total Sales This Month</Typography>
        <Typography variant='h6'>$28,450</Typography>
      </CardContent>
    </Card>
  )
}

export default EcommerceSalesThisMonth
