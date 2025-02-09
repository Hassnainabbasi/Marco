import { ThemeProvider } from "@emotion/react";
import Mixingitems from "../tools/Mixingitems";
import { theme } from "../context/ThemeContext";
import Topheader from "./header/Topheader";
import '../styles/custom.css';  // Correct relative path


export default function SearchBar() {
  return (
    <div className='bs-container'>
        <ThemeProvider theme={theme}>
    <Topheader />
    <div className=''>
        <Mixingitems />
</div>
      </ThemeProvider>
    </div>
  )
}