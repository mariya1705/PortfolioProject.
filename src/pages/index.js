import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured-projects" showLink projects={projects} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        slug
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
