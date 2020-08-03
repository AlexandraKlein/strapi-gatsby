import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="All Blogs" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allBlogs: allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        date(formatString: "MMM Do, YYYY")
        description
        id
        slug
        title
        external_link
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

export default Blog
