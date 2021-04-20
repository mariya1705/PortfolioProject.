import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  description,
  title,
  github,
  url,
  stack,
  image,
  index,
  slug,
}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-description">{description}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
