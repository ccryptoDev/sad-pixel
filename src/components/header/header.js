import React, { useState, useEffect } from 'react'
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
import FocusLock from 'react-focus-lock'
import { connectWeb3, connectMetamask, getUserAddress } from '../../utils/useWeb3'
import BaseModal from '../modal/baseModal'
import BuyModal from '../modal/buyModal'
import Logo from '../../assets/image/logo.png'

const Header = (isFixed, active, ...props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [activedMenu, setActivedMenu] = useState('launching');
  const [address, setAddress] = useState('')
  const [show, setShow] = useState(false);
  
  const menuId = "main-menu";

  useEffect(() => {
    async function getAddress() {
      const address = await getUserAddress()
      if(address) {
        setAddress(address)
      }
    }
    getAddress();
  }, [])
  const connectWallet = async() => {
    try{
      const connection = await connectWeb3()
      if(connection) {
        if(connection._state.accounts.length > 0) {
          setAddress(connection.selectedAddress)
        }
      }
    } catch(e) {
      console.log('error', e);
    }
  }

  const handleBuyButton = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false);
  };

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
              {/* <MenuItem>
                {!address && (<button onClick={connectWallet}>Connect Wallet</button>)}
                {address && (<button onClick={handleBuyButton}>Buy</button>)}
              </MenuItem> */}
            </Menu>
            </Col>
          </HeaderInner>
        </Row>
      </Container>
      <BaseModal show={show} closeModal={closeModal} address={String(address).substring(0, 10) + "..."}>
        <BuyModal closeModal={closeModal} pricePerMint="0.02" max="3" />
      </BaseModal>
    </HeaderContainer>
  );
}

export default Header