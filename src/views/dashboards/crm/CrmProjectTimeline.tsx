// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import Creation from 'mdi-material-ui/Creation'
import Cellphone from 'mdi-material-ui/Cellphone'
import PencilRuler from 'mdi-material-ui/PencilRuler'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))


const CrmProjectTimeline = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} sm={8}>
          <CardHeader
            title='Project Timeline'
            subheader='Total 840 Task Completed'
            subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
            titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
          />
          <Box
            sx={{
              '& .apexcharts-data-labels .apexcharts-datalabel': { fill: theme.palette.common.white },
              '& .apexcharts-canvas': {
                '& .apexcharts-yaxis-label': { fontSize: '0.875rem' },
                '& .apexcharts-xaxis-label': { letterSpacing: '0.4px', fill: theme.palette.text.disabled }
              }
            }}
          >
          </Box>
        </StyledGrid>
        <Grid item xs={12} sm={4}>
          <CardHeader
            title='Project List'
            subheader='4 Ongoing Projects'
            subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
            titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
            action={
              <IconButton size='small' aria-label='settings' className='card-more-options'>
                <DotsVertical />
              </IconButton>
            }
          />
          <CardContent>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3, width: 45, height: 45 }}>
                <Cellphone />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  IOS Application
                </Typography>
                <Typography variant='caption'>Task 840/2.5k</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='success' variant='rounded' sx={{ mr: 3, width: 45, height: 45 }}>
                <Creation />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  Web Application
                </Typography>
                <Typography variant='caption'>Task 99/1.42k</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='secondary' variant='rounded' sx={{ mr: 3, width: 45, height: 45 }}>
                <CreditCardOutline />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  Bank Dashboard
                </Typography>
                <Typography variant='caption'>Task 58/100</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='info' variant='rounded' sx={{ mr: 3, width: 45, height: 45 }}>
                <PencilRuler />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  UI Kit Design
                </Typography>
                <Typography variant='caption'>Task 120/350</Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CrmProjectTimeline
