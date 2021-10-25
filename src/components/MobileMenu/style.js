import styled from 'styled-components';

export const StyledMenu = styled.nav`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  text-align: left;
  transition: transform 0.3s ease-in-out;
  background-color: rgb(22, 22, 22);
  padding: 60px 24px 0 24px;

  a {
    font-family: Lato, arial, sans-serif;
    font-size: 22px;
    padding: 16px 24px;
    font-weight: 500;
    color: rgb(247,247,247);
    letter-spacing: 0.05rem;
    text-decoration: none;
    transition: color 0.3s linear;
    border-bottom: 1px solid rgba(76,76,76,0.5);

    &:hover {
      color: rgb(171, 171, 171);
    }
  }
`;
