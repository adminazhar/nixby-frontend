// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const MobileDetailsSidebar = () => {
  return (
    <>
      <Card>
        <CardHeader title='Latest Mobile 📱' sx={{ pb: 0, pt: 3 }}></CardHeader>
        <CardContent sx={{ m: 0, pb: 0 }}>
          <Typography>
            - Samsung Galxy A
            <br /> - Samsung Galxy A
            <br /> - Samsung Galxy A
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardHeader title='Trending Mobile 🚀' sx={{ pb: 0, pt: 3 }}></CardHeader>
        <CardContent sx={{ m: 0, pb: 0 }}>
          <Typography>
            - Samsung Galxy A
            <br /> - Samsung Galxy A
            <br /> - Samsung Galxy A
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardHeader title='Mobile by Brand 🔠' sx={{ pb: 0, pt: 3 }}></CardHeader>
        <CardContent sx={{ m: 0, pb: 0 }}>
          <Typography>
            - Samsung
            <br /> - Apple
            <br /> - Xiaomi
            <br /> - Realme
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardHeader title='Latest News 📰' sx={{ pb: 0, pt: 3 }}></CardHeader>
        <CardContent sx={{ m: 0, pb: 0 }}>
          <Typography>
            - Samsung Launched XYZ
            <br /> - Apple iPhone 15 Leaked
            <br /> - Xiaomi Launched XYZ
            <br /> - Realme Launched XYZ
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default MobileDetailsSidebar
