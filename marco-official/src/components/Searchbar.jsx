import { ThemeProvider } from "@emotion/react";
import Mixingitems from "../tools/Mixingitems";
import { theme } from "../context/ThemeContext";
import Topheader from "./header/Topheader";


export default function SearchBar() {
  return (
    <div className=''>
        <ThemeProvider theme={theme}>
    <Topheader />
        <Mixingitems />
      </ThemeProvider>
    </div>
  )
}