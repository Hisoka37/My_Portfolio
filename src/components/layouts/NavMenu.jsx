import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText
    } from "../../styles/Global.styled"
import { NavbarContainer, Logo, MenuIcon, NavMenuContainer, MenuItem } from "../../styles/Navbar.styled"
import { AiOutlineClose} from 'react-icons/ai'
import { NavLinks } from "../../utils/MyData"
import { slideInLeft } from "../../utils/Variant"
import { motion } from "framer-motion";




export const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer 
      as={motion.div}
      variants={slideInLeft}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
        <PaddingContainer left='5%' right='5%' top='2rem'>
            <FlexContainer justify="flex-end" responsiveFlex>
            <MenuIcon onClick={() => setOpenMenu(false)}>
                <AiOutlineClose />
            </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        { /* */}

        <PaddingContainer top = '8%'>
          <FlexContainer 
            direction = 'column'
            align='center'
            responsiveFlex
          >
          
          {NavLinks.map((link) => (
              <MenuItem
              as={motion.a}
              whileHover={{scale: 1.3}}
              key={link.id}
              href={`#${link.href}`}
              onClick={() => setOpenMenu(false)}
              >{link.name} </MenuItem>
          ))}
          </FlexContainer>
        </PaddingContainer>


    </NavMenuContainer>
  )
}
