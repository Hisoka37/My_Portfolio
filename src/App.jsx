import { ThemeProvider } from "styled-components"
import { MainBody } from "./styles/Global.styled"
import { theme } from "./utils/Theme"



function App() {


  return (
    <>  
    <ThemeProvider theme= {theme}>
    <MainBody />
    </ThemeProvider> 
    </>
  )
}

export default App
