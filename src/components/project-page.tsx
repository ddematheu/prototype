import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectColumn1, projectColumn2, projectColumns, projectDescription, projectTopImage, projectPageStyle, projectTitle, projectImageTwo, projectImageThree, projectDescriptionDetails} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectPageProps{
    projectName: string;
    data: any;
}

export default function ProjectPage (props:ProjectPageProps){

  const project = props.data.allContentfulProject.edges.find( (edge) => edge.node.id === props.projectName);
  console.log(project.node.childContentfulProjectDescriptionTextNode.internal.content)

  return (
    <>
    <div style={projectPageStyle}>
      <Img style={projectTopImage} fixed={project.node.topImage.fixed} />
      <div style={projectColumns}>
        <div style={projectColumn1}>
          <div style={projectImageTwo}>
            <Img style={projectImageTwo} fixed={project.node.image1.fixed} />
          </div>
          <div style={projectImageThree}>
            <Img style={projectImageThree} fixed={project.node.image2.fixed} />
          </div>
        </div>

        <div style={projectColumn2}>
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
      </div>
    </div>
    </>
  )
}