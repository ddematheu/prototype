import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectColumn1, projectColumn2, projectColumns, projectDescription, projectTopImage, projectPageStyle, projectTitle, projectImageTwo, projectImageThree, projectDescriptionDetails} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectPageProps{
    projectName: string;
}

export default function ProjectPage (props:ProjectPageProps){

  const data = useStaticQuery(
    graphql`
      {
        contentfulProject(id: {eq: "658aac1f-2921-50bd-8935-a7f81dc31110"}) {
          name
          topImage {
            fixed(width: 2388, height: 1171) {
              src
            }
          }
          image1 {
            fixed(width: 1169, height: 1171) {
              src
            }
          }
          image2 {
            fixed(width: 1169, height: 764) {
              src
            }
          }
          childContentfulProjectEquipoRichTextNode {
            content {
              content {
                value
              }
            }
          }
          childContentfulProjectDescriptionTextNode {
            internal {
              content
            }
          }
          ano
          uso
          location
        }
      }
    `)

  return (
    <>
    <div style={projectPageStyle}>
      <Img style={projectTopImage} fixed={data.contentfulProject.topImage.fixed} />
      <div style={projectColumns}>
        <div style={projectColumn1}>
          <div style={projectImageTwo}>
            <Img style={projectImageTwo} fixed={data.contentfulProject.image1.fixed} />
          </div>
          <div style={projectImageThree}>
            <Img style={projectImageThree} fixed={data.contentfulProject.image2.fixed} />
          </div>
        </div>

        <div style={projectColumn2}>
          <div style={projectTitle}>
            {data.contentfulProject.name}
          </div>
          <div style={projectDescription}> {data.contentfulProject.childContentfulProjectDescriptionTextNode.internal.content} </div>
          <div style={projectDescriptionDetails}>
            <u>Ubicacion</u><br/>
            {data.contentfulProject.location} <br/><br/>
            <u>Ano</u><br/>
            {data.contentfulProject.ano} <br/><br/>
            <u>Uso</u><br/>
            {data.contentfulProject.uso} <br/><br/>
            <u>Equipo</u><br/>
            {data.contentfulProject.childContentfulProjectEquipoRichTextNode.content[0].content[0].value}
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