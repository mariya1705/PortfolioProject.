import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/SEO"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <section className="projects-page">
          <Projects projects={projects} title="all-projects" />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: strapiId, order: DESC }) {
      nodes {
        github
        id
        description
        title
        url
        slug
        image {
          childImageSharp {
            fluid {
              src
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
