import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: calc(100% - 30px);

  @media (min-width: 768px) {
    width: calc(100% - 50px);
  }
  @media (min-width: 1024px) {
    width: 984px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
  }
  @media (min-width: 1536px) {
    width: 1280px;
  }
`;

export const ContainerBanner = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% - 50px);
  }
  @media (min-width: 1024px) {
    width: 984px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
  }
  @media (min-width: 1536px) {
    width: 1280px;
  }
`;

export const Row = styled.div`
  margin-right: -24px;
  margin-left: -24px;

  @media (max-width: 769px) {
    margin-right: -15px;
    margin-left: -15px
  }
`;

export const Col = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  
  @media (max-width: 769px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;