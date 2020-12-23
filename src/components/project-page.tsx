import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectAreaMobile, projectColumn1, projectImageThreeMobile, projectColumn2, projectColumns, projectDescription, projectTopImage, projectPageStyle, projectTitle, projectImageTwo, projectImageThree, projectDescriptionDetails, projectPageStyleMobile, projectColumnsMobile} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectPageProps{
    projectName: string;
    data: any;
    width: number;
}

export default function ProjectPage (props:ProjectPageProps){

  const project = props.data.allContentfulProject.edges.find( (edge) => edge.node.id === props.projectName);

  return (
    <>
    <div style={props.width > 700 ? projectPageStyle : projectPageStyleMobile}>
      <Img style={projectTopImage} fixed={project.node.topImage.fixed} />
      <div style={props.width > 700 ? projectColumns : projectColumnsMobile}>
        <div style={props.width > 700 ? projectColumn1 : projectAreaMobile}>
          <div style={projectTitle}>
            {project.node.name}
          </div>
          <div style={projectDescription}> {project.node.childContentfulProjectDescriptionTextNode.internal.content} </div>
          <div style={projectDescriptionDetails}>
            <u>Ubicacion</u><br/>
            {project.node.location} <br/><br/>
            <u>Ano</u><br/>
            {project.node.ano} <br/><br/>
            <u>Uso</u><br/>
            {project.node.uso} <br/><br/>
            <u>Equipo</u><br/>
            {project.node.childContentfulProjectEquipoRichTextNode.content[0].content[0].value}
            <br/><br/>
            En colaboracion con:<br/>
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