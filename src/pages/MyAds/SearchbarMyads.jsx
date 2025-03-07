import { ThemeProvider } from '@emotion/react'
import { theme } from '../../context/ThemeContext.jsx' 
import '../../styles/custom.css' // Correct relative path
import MixingItems from '../../tools/Mixingitems'
import Topheader from '../../components/header/Topheader'
import MixingItemsMyads from './MixingitemsMyads'

export default function SearchBarMyads() {
  return (
    <div className="bs-container">
      <ThemeProvider theme={theme}>
        <Topheader />
        <div className="">
          <MixingItemsMyads />
        </div>
      </ThemeProvider>
    </div>
  )
}
