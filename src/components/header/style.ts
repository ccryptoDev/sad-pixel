import styled from 'styled-components'

interface props {
  isFixed: boolean
}

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.8s;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  max-width: 267px;
  max-height: 52px;

  @media( max-width: 420px ) {
    max-width: 220px;
    text-align: center;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
  margin: 12px 16px;
  cursor: pointer;
  transition: 0.5s;

  &.active {
    border-bottom: 1px solid rgb(117, 117, 117) !important;
  }
  &.active a {
    color: rgb(117, 117, 117) !important;
  }
  &:hover {
    color: rgb(171, 171, 171);
  }
  button {
    background: transparent;
    color: #fff;
    border: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
  }
  button:hover {
    color: rgb(171, 171, 171) !important;
  }
  a {
    color: #fff !important;
    text-decoration: none !important;
    transition: 0.5s;
  }
  a.active {
    border-bottom: 1px soid;
  }
  a:hover {
    color: rgb(171, 171, 171) !important;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;