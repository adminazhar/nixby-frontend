// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'


const CrmWeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Weekly Overview'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 },
          '& .apexcharts-canvas .apexcharts-yaxis-label': { fontSize: '0.75rem', fill: theme.palette.text.disabled }
        }}
      >
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 4 }} variant='h5'>
            62%
          </Typography>
          <Typography variant='body2'>Your sales performance is 35% 😎 better compared to last month</Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default CrmWeeklyOverview
