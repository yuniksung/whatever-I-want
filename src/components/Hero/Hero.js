import React from 'react'
import {
    HeroContainer,
    HeroHeading,
    IntroWord,
    Introme,
    IntroText,
    FirstSpan,
    SecondSpan,
    ViewBox,
    Viewbtn
} from './HeroElement'
const Hero = () => {
    return (
        <>
        <HeroContainer>
            <HeroHeading>
                <IntroWord>
                    Hello & Welcome
                </IntroWord>
                <Introme>
                I'm Yunik Sung, a full-stack web developer
                </Introme>
                <IntroText>
                Here, I freely <FirstSpan>design</FirstSpan>, <FirstSpan>create</FirstSpan> and <FirstSpan>build</FirstSpan> things.
                </IntroText>
                <IntroText>
                It's not for a project nor to show off.
                </IntroText>
                <IntroText>
                This page is, <SecondSpan>"Whatever I Want"</SecondSpan> page.
                </IntroText>
            </HeroHeading>
        </HeroContainer>
        <ViewBox>
            <Viewbtn>view my works</Viewbtn>
        </ViewBox>
        </>
    )
}

export default Hero
