import React from 'react'
import styled from 'styled-components';
import Wave from './wave';

const SectionGroup = styled.div`
    /* apply props.image from the function below */
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media(max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    max-width: 80%;
    margin: 0 auto;
    grid-gap: 20px;

    @media (max-width: 1024px) {
        max-width: 100%;
        margin: 0 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 48px;
        align-self: center;
    }
`

const SectionText = styled.p`
    color: white;

    @media (max-width: 768px) {
        align-self: end;
        margin-top: 0;
    }
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section;