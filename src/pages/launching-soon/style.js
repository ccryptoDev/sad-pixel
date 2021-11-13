import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  font-family: Lato, arial, sans-serif;

  h1 {
    font-family: 'prstart';
    text-transform: uppercase;
    font-size: 25px;
    line-height: 1.2;
    color: #587480;
    margin-bottom: 24px;
    margin-top: 0;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: #A4A4A4;
    margin: 30px 0;
  }
  p.font-italic {
    font-style: italic;
  }
  span.italic {
    font-style: italic;
  }
  q.quote {
    font-style: italic;
  }
  .desc-with-icon p {
    margin-bottom: 30px;
  }
  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #A8A8A8;
    margin-bottom: 30px;
  }
  .footer {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
  .short-border {
    width: 50px;
    margin: 0 auto;
    border: 0.5px solid #2A2A2A;
  }
  .abstract p {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: #A4A4A4;
    margin: 0px;
  }
  .company-info {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: #A4A4A4;

    ul {
      margin: 10px 0;
      padding-left: 21px;
    }
    li {
      
    }
  }
  .no-full-width, .no-full-width-gif {
    width: 86%;
    margin: 5rem auto;
  }
  .no-full-width-gif {
    @media( max-width: 640px ) {
      width: 100%;
    }
  }
  .m-5 {
    margin: 5rem 0;
  }
  .mt-3 {
    margin-top: 3rem;
  }
  .mt-5 {
    margin-top: 5rem;
  }
  .mt-7 {
    margin-top: 7rem;
    text-align: center;
  }
  .mb-7 {
    margin-bottom: 7rem;
  }
  .mb-5 {
    margin-bottom: 5rem;
  }
  .mb-3 {
    margin-bottom: 3rem;
  }
`;

export const PageInner = styled.div`
  
`;

export const ContentInner = styled.div`
  width: calc(100% - 160px);
  margin: 88px auto 0;
`;

export const Content = styled.div`

`;

export const Banner = styled.div`
  text-align: center;
  margin-top: 78px;
  margin-bottom: 56px;
  
  img.desktop-banner {
    display: block;
  }
  img.mobile-banner {
    display: none;
  }
  img {
    width: 100%;
  }
  @media( max-width: 768px ) {
    img{
      width: 100%;
    }
    img.desktop-banner {
      display: none;
    }
    img.mobile-banner {
      display: block;
    }
  }
  @media( max-width: 640px ) {
    margin-bottom: 0px;
  }
`;

export const ShortDesc = styled.div`
  padding: 56px 0;

  &.no-padding {
    padding: 0
  }
  img {
    width: 100%;
  }
  @media( max-width: 640px ) {
    padding-top: 12px;
  }
`;

export const Roadmap = styled.div`
  padding: 56px 0;

  &.no-padding-bottom {
    padding-bottom: 0px;
  }
  &.no-padding-top {
    padding-top: 0px;
  }
  img {
    width: 100%;
  }
`;

export const RoadmapWithBackground = styled.div`
  padding: 75px 0 56px;
  background-color: rgb(22, 22, 22);

  img {
    width: 100%;
  }
`;

export const ConnectToDiscord = styled.button`
  font-family: 'prstart';
  font-size: 22px;
  text-transform: uppercase;
  padding: 12px 22px;
  border: 2px solid #b5b5b5;
  background-color: #0a1c25;
  color: #587480;
  cursor: pointer;

  &:hover {
    opacity: 0.65;
  }
`;
