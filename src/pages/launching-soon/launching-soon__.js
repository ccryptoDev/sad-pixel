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

const LaunchingSoon = () => {
  const [isFixed, setIsFixed] = useState(false);
  const JoinToDiscord = () => {
    window.open('http://discord.gg/hTdUmKfAtb', '_blank');
  }
  return (
    <PageContainer onWheel={ event => {
      if (event.nativeEvent.wheelDelta > 0) {
        if(window.pageYOffset === 0 ) {
          setIsFixed(false);
        };
      } else {
        if(window.pageYOffset > 0) {
          setIsFixed(true);
        };
      }
    }}>
      <PageInner>
        <Header isFixed={isFixed} />
        <Content>
          <ContainerBanner>
            <Banner>
              <img src={bannerGif} className="desktop-banner" alt="sad pixel" />
              <img src={banner_mobileGif} className="mobile-banner" alt="sad pixel" />
            </Banner>
          </ContainerBanner>
          <ShortDesc>
            <Container>
              <Row>
                <Col>
                  <p>
                    Sad Pixels is the first stage of a 3-phase multimedia art project. 
                    Each phase represents a multi-layered approach to one overarching theme: <span className="italic">Technology and social media are destroying our mental health.
                  </span></p>
                  <p>
                    There is room for generative art collections to explore themes of deeper substance, make social commentary, and expand into the world of subversive art. 
                    This project aims to do just that.
                  </p>
                  <div className="m-5">
                    <img src={banner} alt="sad pixel" />
                  </div>
                  <p>
                    The phases of the project reflect the evolution of minimalistic pixel art into a fully immersive experience:
                  </p>
                  <div className="abstract">
                    <p>Phase 1: Pixel Art</p>
                    <p>Phase 2: Anime Airdrop & Live-Action Art</p>
                    <p>Phase 3: Metaverse Expansion & Tokenomics</p>
                  </div>
                  <p>
                    This progression incrementally unlocks value for the community as the phases evolve into higher art forms. 
                    As our community grows and we gather feedback, some elements of the project may change. At each phase, donations will be made to mental health organizations, chosen with the help of the community. 
                    Sad Pixels is being launched by a California team of entertainment industry veterans. More details on the project and the team below.
                  </p>
                  <div className="no-full-width"><img src={limited_presale} alt="Limited Presale" /></div>
                </Col>
              </Row>
            </Container>
          </ShortDesc>
          <RoadmapWithBackground>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 1:<br />Pixel Art</h1>
                  <p>
                    Sad Pixels will be released as a 10,000 character NFT collection. Every character is unique and randomly assigned on-chain (with the exception of 10 ultra rare GIFs, explained below). 
                    This on-chain randomization method ensures that community members get a fair chance at minting whichever character, regardless of rarity. <br />
                    There are 10 ultra rare GIFs, and 1 will be placed randomly in the collection for a lucky winner to mint. Once all Sad Pixels are minted, the final 9 GIFs will be auctioned off.
                  </p>
                </Col>
              </Row>
            </Container>
            <ContainerBanner>
              <Row>
                <Col>
                  <div className="no-full-width-gif mb-5">
                    <img src={computer} alt="computer" />
                  </div>
                </Col>
              </Row>
            </ContainerBanner>
            <Container>
              <Row>
                <Col>
                  <p>As Phase 1 continues, we will work on dropping a collection of merch for the community— stuff that you’d actually want to wear.</p>
                  <div className="no-full-width mb-5">
                    <img src={phase1} alt="dropping merch" />
                  </div>
                  {/* <div className="desc-with-icon">
                    <p><span>💎 &nbsp;Merch drop- Stuff that you would actually want to wear.</span></p>
                    <p><span>💎 &nbsp;$21k cash giveaway- $7k for each of our three most active community members.</span></p>
                    <p><span>💎 &nbsp;$30k charity donation- sent to the top three mental health organizations selected by the community. Future donations will be made with portions of secondary sales.</span></p>
                  </div>     */}
                </Col>
              </Row>
            </Container>
          </RoadmapWithBackground>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 2:<br />Anime airdrop & Live-Action Art</h1>
                  <p>
                    As Phase 1 mints out, the production of Phase 2 is unlocked. 
                    The Sad Pixels characters will be re-imagined as anime versions and airdropped to the community. 
                    As the anime drawings take form, we’ll share art updates with our members. 
                    With ongoing communication and transparency, we hope to build long-term trust with our community. 
                    Diamond hands will be rewarded.
                  </p>
                  <p className="font-italic">The Sad Pixels get brought to life...</p>
                  <p>
                    Have you ever seen a generative NFT project take human form? 
                    This is where things get interesting. 
                    Beyond anime, we aim to produce a series of live-action art videos. 
                    This is perhaps the most ambitious component of the project. 
                    These one-of-one pieces will be dark, yet thought-provoking video productions. 
                    We will seed this content across social media to strategically leverage our team’s entertainment industry expertise (we’ve previously created YouTube and TikTok campaigns garnering 100 million+ views). 
                    We want to stand out by doing something different. The art will be bold, subversive, and address the mental health theme of the project head-on. *Insert trigger warning here.*
                    <br />
                    We will auction off these videos as one-of-one NFTs. The auction will add artistic credibility and extra visibility for the original Sad Pixels NFT collection.
                  </p>
                  <div className="mt-3">
                    <img src={phase2} alt="Anime airdrop & Live-Action Art" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
          <RoadmapWithBackground>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 3:<br />Metaverse Expansion & Tokenomics</h1>
                  <p>
                    It may seem counterintuitive for this project to dive into the metaverse, when it is critiquing the very idea that technology is taking over our lives. 
                    However, that is the poetic irony of the project; technological overload is the train wreck that we can’t look away from. We are drawn to it, despite our awareness that it is destroying our humanity. 
                  </p>
                  <p>
                    The metaverse will inevitably bring darkness, in the sense that it will exacerbate mental health issues. 
                    To counter this, we want to create a metaverse art gallery, where artists are welcome to explore subversive themes. 
                    We may have become desensitized by technology, but this gallery can exist as a stimulating place to revive the sense of novelty that we’ve lost. 
                    Through shared experiences with provocative art, maybe we’ll feel a little less numb.
                  </p>
                  <p>
                    Brand new art forms will exist within the metaverse, and we want to provide the art with a home. 
                    This will be a new concept for experimental and emerging cyber art forms. 
                    We’re unafraid to use this space as the go-to venue for all that is weird, dark, different— and even controversial. 
                    <br />
                    We want to partner with digital artists and recording artists to use this space for unique projects. 
                    Our team is deeply involved in the music industry, so we would love to invite our LA friends to come perform and get involved.
                  </p>
                  <p className="font-italic">Time for a serotonin boost...</p>
                  <p>
                    We could offer you a 5% royalty on secondary sales, and act as if that’s a legit source of passive income… 
                    but let’s be real here, that tiny royalty split across thousands of holders won’t even pay your light bills. 
                    We do want to create extra utility, but that will take reaching the scale needed to do this properly. 
                    We hope to grow Sad Pixels into a blue-chip project with a serious legacy, and then launch a passive income token from there. 
                    This could come in the form of an air-dropped project offering yield, perhaps in the form of a $SEROTONIN token. 
                    This airdrop could add a nice little *boost* to the value of your Sad Pixels NFT.
                  </p>
                  <p>
                    We envision our community using the $SEROTONIN token to access unique experiences, such as exclusive events in our metaverse art gallery. 
                    As you can see, we’re full of creative ideas, and we’re excited for this vision to fully come to life.
                  </p>
                  <div className="mt-3">
                    <img src={phase3} alt="Metaverse Expansion & Tokenomics" />
                  </div>
                </Col>
              </Row>
            </Container>
          </RoadmapWithBackground>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <h1>Our Team</h1>
                  <p>
                    We know you guys love to hate on anonymous projects. We’re not here to rug you, but we are trying to make an artistic statement with our anonymity. 
                    The message of this collection is centered around the idea that social media and tech are destroying our mental health. 
                    Our team truly believes in this message, so it wouldn’t make sense to post our socials.
                  </p>
                  <p>
                    We want our efforts to speak for themselves through the art. 
                    Our intention is to be thought-provoking, and even invite you to reflect on the balance that you keep between life online and offline.
                  </p>
                  <div className="company-info">
                    Our team’s credentials include:
                    <ul>
                      <li>Business degrees from USC and UC Berkeley.</li>
                      <li>Combined 15+ years experience creating art projects with billion-streaming recording artists.</li>
                      <li>Our Data Scientist has executed multiple smart contract deployments, with innovative techniques to minimize gas fees.</li>
                      <li>Our CFO has managed major record label budgets of more than $70 million.</li>
                      <li>Our Marketing Chief has executed creative campaigns amassing hundreds of millions of YouTube and TikTok views.</li>
                    </ul>
                  </div>
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