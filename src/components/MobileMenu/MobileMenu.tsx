import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './style';

interface Props {
  open: boolean
}

const MobileMenu = ({open}: Props) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu className="mobile-menu" open={open} aria-hidden={!isHidden}>
      <a href="/launching-soon" tabIndex={tabIndex}>
        Launching Soon
      </a>
      <a href="https://twitter.com/SadPixelsNFT" target="_blank" tabIndex={tabIndex} rel="noopener noreferrer">
        Twitter
        </a>
      <a href="http://discord.gg/hTdUmKfAtb" target="_blank" tabIndex={tabIndex} rel="noopener noreferrer">
        Discord
        </a>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu;
