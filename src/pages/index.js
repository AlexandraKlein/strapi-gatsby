import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import VideoHero from "../components/VideoHero"
import Members from "../components/Members"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    limitedMembers: { nodes: members },
    limitedBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <Hero />
      <VideoHero />
      <Members title="Our Newest Members" members={members} showLink />
      <Blogs blogs={blogs} title="Latest Articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    limitedMembers: allStrapiMembers(
      limit: 10
      sort: { order: DESC, fields: created_at }
    ) {
      nodes {
        image {
          childImageSharp {
            fluid(traceSVG: { color: "#abddd8" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        location
        name
        id
      }
    }
    limitedBlogs: allStrapiBlogs(
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      nodes {
        date(formatString: "MMM Do, YYYY")
        description
        id
        slug
        title
        image {
          childImageSharp {
            fluid(traceSVG: { color: "#abddd8" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
