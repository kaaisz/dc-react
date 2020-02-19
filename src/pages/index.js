import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div> */}
          <Link to="/page-2/">Watch the Video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage