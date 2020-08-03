import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogTemplate = ({ data }) => {
  const { content, title, description, external_link, image } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article>
            <Image
              fluid={image.childImageSharp.fluid}
              className="blog-template-img"
            />
            <ReactMarkdown source={content} />
            {external_link && (
              <div className="external-link">
                <a
                  href={external_link}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Full Article
                </a>
              </div>
            )}
          </article>
          <Link to="/blog" className="btn center-btn">
            Back to Blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
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
`

export default BlogTemplate
