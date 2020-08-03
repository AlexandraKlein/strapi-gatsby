import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Members from "../components/Members"
import SEO from "../components/SEO"

const MembersPage = ({ data }) => {
  const {
    allStrapiMembers: { nodes: members },
  } = data

  return (
    <Layout>
      <SEO title="Members" description="Our Members" />
      <Members title="Our Members" members={members} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiMembers {
      nodes {
        id
        name
        location
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

export default MembersPage
