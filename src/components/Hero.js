import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "gfm_hero.png" }) {
      childImageSharp {
        fluid(traceSVG: { color: "#abddd8" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>
              Grannies For <br />
              Masks
            </h1>
            <h4>Join the Movement</h4>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
          <SocialLinks />
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
