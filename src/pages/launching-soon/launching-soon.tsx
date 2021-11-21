import React, { useState } from 'react'
import {
  Container,
  ContainerBanner,
  Row,
  Col
} from '../style'
import { 
  Header
} from '../../components'
import {
  PageContainer,
  PageInner,
  Content,
  Banner,
  ShortDesc,
  Roadmap,
  RoadmapWithBackground,
  ConnectToDiscord
} from './style'

import bannerGif from '../../assets/image/banner.gif'
import banner_mobileGif from '../../assets/image/banner_mobile.gif'
import limited_presale from '../../assets/image/limited_presale.gif'
import computer from '../../assets/image/computer.gif'
import banner from '../../assets/image/banner.png'
import phase1 from '../../assets/image/phase1.png'
import phase2 from '../../assets/image/phase2.png'
import phase3 from '../../assets/image/phase3.png'
import roadmap from '../../assets/image/roadmap.png'


const LaunchingSoon = () => {
  const [isFixed, setIsFixed] = useState(false);
  const JoinToDiscord = () => {
    window.open('http://discord.gg/hTdUmKfAtb', '_blank');
  }
  return (
    <PageContainer>
      <PageInner>
        <Header />
        <Content>
          <ContainerBanner>
            <Banner>
              <img src={bannerGif} className="desktop-banner" alt="sad pixel" />
              <img src={banner_mobileGif} className="mobile-banner" alt="sad pixel" />
            </Banner>
          </ContainerBanner>
          <ShortDesc className="no-padding">
            <Container>
              <Row>
                <Col>
                  <div className="no-full-width"><img src={limited_presale} alt="Limited Presale" /></div>
                </Col>
              </Row>
            </Container>
          </ShortDesc>
          
          <Roadmap className="no-padding-bottom">
            <Container>
              <Row>
                <Col>
                  <h1>ROADMAP</h1>
                  <p>
                    Too sad to make a roadmap.
                  </p>
                  <p>
                    Our roadmap is that there is no roadmap. The whole point of this project is to show how fucked up the internet and social media are.
                    The art is a reflection of how tech has ruined our mental health. Just buy the art if you're numb like us. Or don't. We don't care.
                  </p>
                  <div className="mt-5 mb-5">
                    <img src={roadmap} alt="roadmap" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
          
          <Roadmap className="no-padding-top">
            <Container>
              <Row>
                <Col>
                  <h1>Our Team</h1>
                  <p>
                    Too sad to dox ourselves.<br />
                    <q className="quote">Big tech and social media have destroyed our mental health.</q>&nbsp;That's literally the entire message of this project. 
                    So why would we put ourselves out there on social media? No thanks. Sorry internet strangers <div className="emoji">&#128579;</div>
                  </p>
                  <p>
                    If you’re still so interested in our personal lives, we live in Los Angeles and work in the music industry. 
                    We have degrees from USC and UC Berkeley, and 15+ years of experience creating art projects with billion-streaming recording artists.
                  </p>
                  <p>
                    This is just a pixel art project-- it's really not that serious.
                  </p>
                  <div className="mt-7">
                    <ConnectToDiscord onClick={JoinToDiscord}>
                      Join Discord
                    </ConnectToDiscord>
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <div className="footer">
                    <h5>Copyright © 2021 Sad Pixels - All Rights Reserved.</h5>
                    <div className="short-border"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
        </Content>
      </PageInner>
    </PageContainer>
  );
}

export default LaunchingSoon