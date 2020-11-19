import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectColumn1, projectColumn2, projectImage, projectPageStyle} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectsPageProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
}

export default function Projects (props:ProjectsPageProps){

  const data = useStaticQuery(
    graphql`
        query {
        image1: file(relativePath: { eq: "building1.png" }) {
            childImageSharp {
              fixed(width: 2388, height: 1171) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }`)


  return (
    <>
    <div style={projectPageStyle}>
      <Img style={projectImage} fixed={data.image1.childImageSharp.fixed} />
    </div>
    </>
  )
}