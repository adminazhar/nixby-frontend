// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const CrmOrganicSessions = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Organic Sessions'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          '& .apexcharts-datalabel-value': { fontWeight: '500 !important', fontSize: '2rem !important' },
          '& .apexcharts-datalabel-label': {
            fontSize: '1rem !important',
            fill: `${theme.palette.text.secondary} !important`
          }
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.25, fontSize: '0.75rem', color: 'warning.main' }} />
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              USA
            </Typography>
          </Box>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.25, fontSize: '0.75rem', color: hexToRGBA(theme.palette.warning.main, 0.8) }} />
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              India
            </Typography>
          </Box>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.25, fontSize: '0.75rem', color: hexToRGBA(theme.palette.warning.main, 0.6) }} />
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              Canada
            </Typography>
          </Box>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.25, fontSize: '0.75rem', color: hexToRGBA(theme.palette.warning.main, 0.4) }} />
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              Japan
            </Typography>
          </Box>
          <Box sx={{ mx: 3, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.25, fontSize: '0.75rem', color: hexToRGBA(theme.palette.warning.main, 0.2) }} />
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
              France
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CrmOrganicSessions
