import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/Card";
import Section from '../components/Section';
import Wave from "../components/wave";
import staticdata from "../../staticdata.json";
import Cell from "../components/Cell";

const SectionCaption = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media(max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 20px 60px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1 className="Hero__title">Learn to<br/>design and code React apps</h1>
          <p className="Hero__text">Complete courses about the best tools and design systems. Prototype and build apps with React.</p>
          <p className="Hero__text">Now go build something great.</p>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div> */}
          <Link to="/video">Watch the Video</Link>
          <div className="Logos">
            <img src={require('../images/logo-sketch.png')} width="50" />
            <img src={require('../images/logo-figma.png')} width="50" />
            <img src={require('../images/logo-studio.png')} width="50" />
            <img src={require('../images/logo-framer.png')} width="50" />
            <img src={require('../images/logo-react.png')} width="50" />
            <img src={require('../images/logo-swift.png')} width="50" />
          </div>
          <Wave />
        </div>
        <div className="Cards">
          <h2 className="Cards__header">11 Courses, more coming</h2>
          <div className="CardGroup">
            <Card 
              title="Design System" 
              text="10 sections" 
              image={require('../images/wallpaper.jpg')}/>
            <Card 
              title="React for Designers" 
              text="12 sections" 
              image={require('../images/wallpaper2.jpg')}/>
            <Card 
              title="Sound Design" 
              text="12 sections" 
              image={require('../images/wallpaper3.jpg')}/>
            <Card 
              title="ARkit 2" 
              text="12 sections" 
              image={require('../images/wallpaper4.jpg')}/>
          </div>
        </div>
        <Section 
          image={require('../images/wallpaper2.jpg')}
          logo={require('../images/logo-react.png')}
          title="React for Designers"
          text="Learn how to build a modern site using React and site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
        />
        <SectionCaption>12 sections - 6 hours</SectionCaption>
        <SectionCellGroup>
          {staticdata.cells.map(cell => (
            <Cell title={cell.title} 
                  image={cell.image} />
          ))}
        </SectionCellGroup>
      </div>
    </div>
  </Layout>
)

export default IndexPage
