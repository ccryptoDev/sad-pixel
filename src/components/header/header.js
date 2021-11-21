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
import BaseModal from '../modal/baseModal'
import BuyModal from '../modal/buyModal'
import Logo from '../../assets/image/logo.png'

import ConnectBtnWrapper from './ConnectBtnWrapper'

const Header = (isFixed, active, ...props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [activedMenu, setActivedMenu] = useState('launching');
  const [address, setAddress] = useState('')
  const [show, setShow] = useState(false);
  
  const menuId = "main-menu";

  useEffect(() => {
    // const provider = getProvider()
    // if(provider) {
    //   if(!provider.isConnected) {
    //     connectToPhantom()
    //   }
    // }
  }, [])

  // connect to phantom
  const createConnection = () => {
    connectToPhantom()
  };

  const connectToPhantom = async () => {
    try {
      const resp = await window.solana.connect()
      const publicKey = resp.publicKey.toString()
      setAddress(publicKey)
      return true
    } catch (err) {
      console.log(err.message)
      return false
    }
  }
  
  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      } else {
        return false
      }
    }
    // window.open("https://phantom.app/", "_blank");
  };

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
              {/* <MenuItem>
                <a href="/launching-soon">Comming Soon</a>
              </MenuItem> */}

              {/* <MenuItem>
                {!address && (<button onClick={createConnection}>Connect</button>)}
                {address && (<button onClick={handleBuyButton}>Mint</button>)}
              </MenuItem> */}

              <MenuItem>
                <ConnectBtnWrapper />
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
      <BaseModal show={show} closeModal={closeModal} address={String(address).substring(0, 10) + "..."}>
        <BuyModal closeModal={closeModal} pricePerMint="0.02" max="3" />
      </BaseModal>
    </HeaderContainer>
  );
}

export default Header