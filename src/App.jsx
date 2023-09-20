import { ThemeProvider } from "styled-components"
import { Container, MainBody } from "./styles/Global.styled"
import { theme } from "./utils/Theme"
import { Showcase } from "./components/Showcase"




function App() {


  return (
    <>  
    <ThemeProvider theme= {theme}>
    <MainBody>
      <Container>
        <Showcase />
      </Container>  
    </MainBody>
    </ThemeProvider> 
    </>
  )
}

export default App
