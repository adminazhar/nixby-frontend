// ** React Imports
import { ReactElement } from 'react'
import React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MobileDetailsSidebar from 'src/@core/layouts/components/Mobile/MobileDetailsSidebar'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ShareVariantOutline from 'mdi-material-ui/ShareVariantOutline'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

import Paper from '@mui/material/Paper'

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

interface SaleDataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: SaleDataType[] = [
  {
    stats: '8,458',
    color: 'primary',
    title: 'Customers',
    icon: <AccountOutline />
  },
  {
    icon: <Poll />,
    stats: '$28.5k',
    color: 'warning',
    title: 'Total Profit'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  },
  {
    color: 'info',
    stats: '2,450k',
    icon: <TrendingUp />,
    title: 'Transactions'
  }
]

const renderStats = () => {
  return salesData.map((sale: SaleDataType, index: number) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' variant='rounded' color={sale.color} sx={{ mr: 4 }}>
          {sale.icon}
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {sale.stats}
          </Typography>
          <Typography variant='caption'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const createData = (type: string, value: number) => {
  return { type, value }
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356)
]

const Mobile = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={9} lg={9}>
          <Card>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', p:3 }}>
            <Typography variant='h4'>Baby Doge Coin <ShareVariantOutline /></Typography>
            <Box>
              <Typography variant='h5'>Baby Doge Coin Price INR: <strong>₹ 4.81</strong></Typography>
              <Typography>Updated: 17 September 2022 12:48 IST</Typography>
            </Box>
          </Box>
  
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <Card sx={{}} variant='outlined'>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img width={137} height={176} alt='Apple iPhone 11 Pro' src='/images/iPhone-11-pro.png' />
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button variant='contained' size='large' fullWidth>
                      Buy Now
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Box>
                    <Card sx={{}}>
                      <CardContent>
                        {/* Override below with H1 for SEO */}
                        <Typography variant='h5' sx={{ fontWeight: 600, mb: 1.1 }}>
                          Samsung Galaxy S22
                        </Typography>
                        <Grid container spacing={6}>
                          {renderStats()}
                        </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 4 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 4 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 0 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 0 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 0 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* BOX DISPLAY */}
                  <Box sx={{ mt: 0 }}>
                    <Card>
                      <CardHeader
                        title='Display'
                        titleTypographyProps={{ variant: 'h6' }}
                        sx={{ m: 0, pb: 1, pt: 2 }}
                      />
                      <TableContainer component={Paper}>
                        <Table size='small' aria-label='a dense table'>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow key={row.type} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                  {row.type}
                                </TableCell>
                                <TableCell align='center'>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <MobileDetailsSidebar />
        </Grid>
      </Grid>
    </>
  )
}

export default Mobile
