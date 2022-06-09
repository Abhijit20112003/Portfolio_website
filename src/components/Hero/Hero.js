import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi !, I'm Abhijit <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm fullstack developer , currently learning Web3 and Blockchain. Interested in startups, finance, Blockchain and many more. I love to work with other people in hackathons and collaborative projects.
I'm always looking to meet new people so get in touch!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
