import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText
    } from "../../styles/Global.styled"
import { NavbarContainer, Logo, MenuIcon, NavMenuContainer } from "../../styles/Navbar.styled"
import { AiOutlineClose} from 'react-icons/ai'


export const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
        <PaddingContainer left='5%' right='5%' top='2rem'>
            <FlexContainer justify="flex-end">
            <MenuIcon onClick={() => setOpenMenu(false)}>
                <AiOutlineClose />
            </MenuIcon>
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}
