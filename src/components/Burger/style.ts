import { string } from 'prop-types';
import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const StyledBurger = styled.button<Props>`
  position: absolute;
  top: 30px;
  left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
  span {
    width: 22px;
    height: 2px;
    background: #F7F7F7;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${open => open ? 'rotate(45deg)' : 'rotate(0)'};
      transform: ${open => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
