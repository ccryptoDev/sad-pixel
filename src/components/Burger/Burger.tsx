import React, { Dispatch, SetStateAction } from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './style';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Burger = ( {
  open,
  setOpen
}: Props ) => {
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
