// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Finance from 'mdi-material-ui/Finance'
import Cellphone from 'mdi-material-ui/Cellphone'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => [
  {
    title: 'Home',
    icon: HomeOutline,
    path: '/home'
  },
  {
    title: 'Mobile',
    icon: Cellphone,
    path: '/mobile'
  },
  {
    title: 'Finance',
    icon: Finance,
    path: '/second-page'
  }
]

export default navigation
