import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Row,
  Col
} from '../../pages/style'
import {
  HeaderContainer,
  HeaderInner,
  LogoContainer,
  Menu,
  MenuItem,
  MobileMenuContainer
} from './style'
import { Burger, MobileMenu } from '../../components';
// import { slide as SlideMenu } from 'react-burger-menu'
import FocusLock from 'react-focus-lock'
import Logo from '../../assets/image/logo.png'

const Header = (isFixed, active, ...props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [activedMenu, setActivedMenu] = useState('launching');
  const menuId = "main-menu";

  return (
    <HeaderContainer isFixed={isFixed}>
      <Container>
        <Row>
          <HeaderInner>
            <MobileMenuContainer className="mobile-menu-wrapper">
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <MobileMenu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </MobileMenuContainer>
            <Col>
            <LogoContainer>
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </LogoContainer>
            </Col>
            <Col>
            <Menu>
              <MenuItem className="active">
                <a href="/launching-soon">Launching Soon</a>
              </MenuItem>
              <MenuItem>
                <a href="https://twitter.com/SadPixelsNFT" target="_blank" rel="noopener noreferrer">Twitter</a>
              </MenuItem>
              <MenuItem>
                <a href="http://discord.gg/hTdUmKfAtb" target="_blank" rel="noopener noreferrer">Discord</a>
              </MenuItem>
            </Menu>
            </Col>
          </HeaderInner>
        </Row>
      </Container>
    </HeaderContainer>
  );
}

export default Header