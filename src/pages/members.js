import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import Title from "../components/Title"
import SEO from "../components/SEO"

const MembersPage = ({ data }) => {
  const {
    allStrapiMembers: { nodes },
  } = data

  console.log({ nodes })

  return (
    <Layout>
      <SEO title="Members" description="Our Members" />
      <section className="members-page">
        <section className="section section-center ">
          <Title title="Our Members" />
          <div className="member-content">
            {nodes.map(member => (
              <>
                <div>
                  <div className="member-img">
                    <Image fluid={member.image.childImageSharp.fluid} />
                  </div>
                  {member.name && <h5>{member.name}</h5>}
                  {member.location && <small>{member.location}</small>}
                </div>
              </>
            ))}
          </div>
        </section>
      </section>
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
