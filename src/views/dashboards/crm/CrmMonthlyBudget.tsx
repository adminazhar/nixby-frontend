// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const CrmMonthlyBudget = () => {
  return (
    <Card>
      <CardHeader
        title='Monthly Budget'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body2'>
          Last month you had $2.42 expense transactions, 12 savings entries and 4 bills.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CrmMonthlyBudget
