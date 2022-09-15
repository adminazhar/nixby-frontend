// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'

const EcommerceLiveVisitors = () => {

  return (
    <Card>
      <CardHeader
        title='Live Visitors'
        subheader='Total 890 Visitors Are Live'
        titleTypographyProps={{ variant: 'h6' }}
        subheaderTypographyProps={{ variant: 'caption' }}
        sx={{ '& .MuiCardHeader-subheader': { fontSize: '0.75rem' } }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ color: 'success.main' }}>
              +78.2%
            </Typography>
            <ChevronUp sx={{ color: 'success.main' }} />
          </Box>
        }
      />
    </Card>
  )
}

export default EcommerceLiveVisitors
