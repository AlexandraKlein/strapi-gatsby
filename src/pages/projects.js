import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const {
    allProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Projects" description="All of my projects" />
      <Projects projects={projects} title="All Projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allProjects: allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
