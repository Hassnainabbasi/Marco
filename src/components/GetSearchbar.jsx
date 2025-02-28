import { ThemeProvider } from '@emotion/react'
import Mixingitems from '../tools/Mixingitems'
import { theme } from '../context/ThemeContext'
import Topheader from './header/Topheader'
import '../styles/custom.css'
import MixingItemsCat from '../tools/Categories/CatMixing'
import TopCatHeader from './header/TopCatHeader'
import MixingItems from '../tools/Mixingitems'

export default function GetSearchbar() {
  return (
    <div className="bs-container">
      <ThemeProvider theme={theme}>
        <Topheader />
        <div className="">
       <MixingItems/>
        </div>
      </ThemeProvider>
    </div>
  )
}
