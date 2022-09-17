// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Finance from 'mdi-material-ui/Finance'
import CurrencyBtc from 'mdi-material-ui/CurrencyBtc'
import Cellphone from 'mdi-material-ui/Cellphone'

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    icon: HomeOutline,
    path: '/home'
  },
  {
    icon: Cellphone,
    title: 'Mobile',
    children: [
      {
        icon: Cellphone,
        title: 'Mobile Details',
        path: '/mobile'
      }
    ]
  },
  {
    title: 'Finance',
    icon: Finance,
    path: '/second-page'
  },
  {
    title: 'Crypto',
    icon: CurrencyBtc,
    path: '/crypto'
  }

]

export default navigation
