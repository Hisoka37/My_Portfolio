import { useState, useEffect } from "react"
import {
 FlexContainer,
 PaddingContainer,
 Container,
 BlueText
 } from "../styles/Global.styled"
 import { NavbarContainer, Logo,MenuIcon } from "../styles/Navbar.styled"
import { GiHamburgerMenu} from "react-icons/gi"
import {theme} from '../utils/Theme'
import { NavMenu } from "./layouts/NavMenu"
import { motion,AnimatePresence } from "framer-motion"



export const Navbar = () => {
     const [openMenu, setOpenMenu ] = useState(false)
     const [sticky, setSticky] = useState(false)

     useEffect(() => {
      const onScroll = () =>  {
        window.pageYOffset > 30 ? setSticky(true) : setSticky(false)
      }
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
     }, [])

  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'}>
      <PaddingContainer
        top='1.2rem'
        bottom="1.2rem"
        responsiveLeft = '1rem'
        responsiveRight = '1rem'
      >
        <Container>
            {/* -- Left Side */}
            <FlexContainer justify="space-between" responsiveFlex>
                    <Logo>
                      W.<BlueText>K</BlueText>
                    </Logo>
            {/* -- Right Side */}
                 <MenuIcon
                 as={motion.a}
                 whileHover={{scale: 1.2}}
                    onClick={()=> { setOpenMenu(true)}}
                 >
                     <GiHamburgerMenu/>
                 </MenuIcon>

           </FlexContainer>
        </Container>
        <AnimatePresence>
        {openMenu && <NavMenu setOpenMenu = { setOpenMenu }  />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  )
}
