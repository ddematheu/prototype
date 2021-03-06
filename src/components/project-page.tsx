import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectAreaMobile, projectColumn1, projectImageThreeMobile, projectColumn2, projectColumns, projectDescription, projectTopImage, projectPageStyle, projectTitle, projectImageTwo, projectImageThree, projectDescriptionDetails, projectPageStyleMobile, projectColumnsMobile, projectTitleMobile, projectDescriptionMobile, projectDescriptionDetailsMobile} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectPageProps{
    projectName: string;
    data: any;
    width: number;
    language: string;
}

export default function ProjectPage (props:ProjectPageProps){

  function checkProject(element, index, array){
    return element.node.node_locale === props.language && element.node.contentful_id === props.projectName
  }

  const project = props.data.allContentfulProject.edges.find(checkProject);

  return (
    <>
    <div style={props.width > 700 ? projectPageStyle : projectPageStyleMobile}>
      <Img style={projectTopImage} fixed={project.node.topImage.fixed} />
      <div style={props.width > 700 ? projectColumns : projectColumnsMobile}>
        <div style={props.width > 700 ? projectColumn1 : projectAreaMobile}>
          <div style={props.width > 700 ? projectTitle : projectTitleMobile}>
            {project.node.name}
          </div>
          <div style={props.width > 700 ? projectDescription : projectDescriptionMobile}> {project.node.childContentfulProjectDescriptionTextNode.internal.content} </div>
          <div style={props.width > 700 ? projectDescriptionDetails : projectDescriptionDetailsMobile}>
            <u>{props.language == 'es' ? "Ubicacion" : "Location"}</u><br/>
            {project.node.location} <br/><br/>
            <u>{props.language == 'es' ? "Año" : "Year"}</u><br/>
            {project.node.ano} <br/><br/>
            <u>{props.language == 'es' ? "Uso" : "Use"}</u><br/>
            {project.node.uso} <br/><br/>
            <u>{props.language == 'es' ? "Equipo" : "Team"}</u><br/>
            {project.node.childContentfulProjectEquipoRichTextNode.content[0].content[0].value}
            <br/><br/>
            {props.language == 'es' ? "En colaboracion con:" : "In collaboration with:"}<br/>
            sketch.com.pa<br/>
          </div>
        </div>
        <div style={props.width > 700 ? projectColumn2 : projectAreaMobile}>
            <Img style={projectImageTwo} fixed={project.node.image1.fixed} />
            <Img style={props.width > 700 ? projectImageThree : projectImageThreeMobile } fixed={project.node.image2.fixed} />
        </div>
      </div>
    </div>
    </>
  )
}