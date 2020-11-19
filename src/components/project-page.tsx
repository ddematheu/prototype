import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { projectColumn1, projectColumn2, projectColumns, projectDescription, projectImage, projectPageStyle, projectTitle} from "./styles/projectPage.styles"
import Img, { FixedObject } from "gatsby-image"

export interface ProjectPageProps{
    projectName: string;
}

export default function ProjectPage (props:ProjectPageProps){

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

      <div style={projectColumns}>
        <div style={projectColumn1}>

        </div>

        <div style={projectColumn2}>
          <div style={projectTitle}>
            SF76
          </div>
          <div style={projectDescription}>
          Cada diseño se deriva del enfoque creativo de la empresa y de su investigación analítica para satisfacer las necesidades de cada cliente, permaneciendo siempre dentro de los límites de su diseño estético. Cada cliente recibe un proyecto impulsado fundamentalmente por sus necesidades. Se busca un equipo que lleve los valores intrínsecos de un buen diseño, buenos acabados y atención al detalle para satisfacer las necesidades de los clientes y encontrar las soluciones más sostenibles para todas las partes involucradas. Musa Arquitectos está conformado por talentos con conocimiento de historia, diseño y sostenibilidad; buscando siempre las mejores referencias y habilidades en cualquier persona perteneciente a su equipo. Su motivación no sólo se basa en arquitectura, sino en la habilidad de traer buen diseño y servicio a la Ciudad de Panamá, desde un punto de vista nuevo y pragmático, con pensamientos estratégicos y a la vez estéticos.
          <br/><br/>
          Cada diseño se deriva del enfoque creativo de la empresa y de su investigación analítica para satisfacer las necesidades de cada cliente, permaneciendo siempre dentro de los límites de su diseño estético. Cada cliente recibe un proyecto impulsado fundamentalmente por sus necesidades. Se busca un equipo que lleve los valores intrínsecos de un buen diseño, buenos acabados y atención al detalle para satisfacer las necesidades de los clientes y encontrar las soluciones más sostenibles para todas las partes involucradas. Musa Arquitectos está conformado por talentos con conocimiento de historia, diseño y sostenibilidad; buscando siempre las mejores referencias y habilidades en cualquier persona perteneciente a su equipo. Su motivación no sólo se basa en arquitectura, sino en la habilidad de traer buen diseño y servicio a la Ciudad de Panamá, desde un punto de vista nuevo y pragmático, con pensamientos estratégicos y a la vez estéticos.
          <br/><br/>
          Cada diseño se deriva del enfoque creativo de la empresa y de su investigación analítica para satisfacer las necesidades de cada cliente, permaneciendo siempre dentro de los límites de su diseño estético. Cada cliente recibe un proyecto impulsado fundamentalmente por sus necesidades. Se busca un equipo que lleve los valores intrínsecos de un buen diseño, buenos acabados y atención al detalle para satisfacer las necesidades de los clientes y encontrar las soluciones más sostenibles para todas las partes involucradas. Musa Arquitectos está conformado por talentos con conocimiento de historia, diseño y sostenibilidad; buscando siempre las mejores referencias y habilidades en cualquier persona perteneciente a su equipo. Su motivación no sólo se basa en arquitectura, sino en la habilidad de traer buen diseño y servicio a la Ciudad de Panamá, desde un punto de vista nuevo y pragmático, con pensamientos estratégicos y a la vez estéticos.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}