// ** React Import
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  title: string
  amount: string
  icon: ReactNode
  color: ThemeColor
  trendAmount: number
}

const data: DataType[] = [
  {
    amount: '$845k',
    trendAmount: 82,
    color: 'primary',
    title: 'Google Analytics',
    icon: <ChevronUp sx={{ color: 'success.main' }} />
  },
  {
    trendAmount: 52,
    amount: '$12.5k',
    color: 'secondary',
    title: 'Facebook Ads',
    icon: <ChevronDown sx={{ color: 'error.main' }} />
  }
]

const CrmExternalLinks = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='External Links'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <TableContainer sx={{ mb: 3.75 }}>
        <Table>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '& .MuiTableCell-root': { borderBottomWidth: 0, py: `${theme.spacing(1.125)} !important` } }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Circle sx={{ mr: 2.25, fontSize: '0.75rem', color: `${theme.palette[item.color].main}` }} />
                    <Typography variant='body2' sx={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>{item.amount}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography
                      variant='body2'
                      sx={{ mr: 2.5, fontWeight: 600, color: 'text.primary' }}
                    >{`${item.trendAmount}%`}</Typography>
                    {item.icon}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CrmExternalLinks
