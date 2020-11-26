import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { projectsStyle, projectsDescriptionStyle, galleryStyle, image1, image2, image3, image4, image5, image6, image7, projectImages } from "./styles/projects.styles"
import { LayoutTypes } from "./layout"

export interface ProjectsPageProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
}

export default function Projects (props:ProjectsPageProps){

  function imageOnClick(option){
    props.selectProject(option);
    return props.changeLayout(LayoutTypes.Selected);
  }

  const data = useStaticQuery(
    graphql`
        query {
        image1: file(relativePath: { eq: "building1.png" }) {
            childImageSharp {
              fixed(width: 1576, height: 1171) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }`)


  return (
    <>
    <div style={projectsStyle}>
      <div style={projectsDescriptionStyle}>
        <u>Projects</u><br/><br/>
        Musa Arquitectos es un taller de arquitectura basada en los principios básicos del diseño puro y funcional. La oficina se enfoca en buscar soluciones elegantes, creativas.
      </div>
      <div style={galleryStyle}>
        <div style={image1} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image2} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image3} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image4} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image5} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image6} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
        <div style={image7} onClick={(e) => imageOnClick('Project Name')}>
          <Img style={projectImages} fixed={data.image1.childImageSharp.fixed} />
        </div>
      </div>
    </div>
    </>
  )
}