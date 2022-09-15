// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CrmTotalGrowth = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardContent
        sx={{
          '& .apexcharts-canvas .apexcharts-datalabel-value': {
            fontWeight: 600,
            fontSize: '1rem !important',
            fill: theme.palette.text.secondary
          }
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            $27.9k
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'success.main' }}>
            +16%
          </Typography>
        </Box>
        <Typography variant='body2'>Total Growth</Typography>
      </CardContent>
    </Card>
  )
}

export default CrmTotalGrowth
