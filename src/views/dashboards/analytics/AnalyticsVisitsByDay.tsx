// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const AnalyticsVisitsByDay = () => {

  return (
    <Card>
      <CardHeader
        title='Visits by Day'
        subheader='Total 248.5k Visits'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
      >
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 0.75, fontWeight: 600 }}>Most Visited Day</Typography>
            <Typography variant='body2'>Total 62.4k Visits on Thursday</Typography>
          </Box>
          <CustomAvatar skin='light' color='warning' variant='rounded'>
            <ChevronRight />
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsVisitsByDay
