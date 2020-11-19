/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {aboutTitleStyle, aboutDescriptionStyle, } from './styles/about.styles';

export interface AboutProps{

}

export default function About (props:AboutProps){

  return (
    <>
        <div>
            <div style={aboutTitleStyle}>Nosotros</div>
            <div style={aboutDescriptionStyle}>
            Musa Arquitectos es un taller de arquitectura basada en los principios básicos del diseño puro y funcional. La oficina se enfoca en buscar soluciones elegantes, creativas y contemporáneas a problemas pragmáticos, con el cual buscan crear proyectos que conceptualicen las relaciones existentes entre identidad propia, cultura, necesidad del cliente y los obstáculos ambientales que se presentan día a día. Su interés abarca desde proyectos comerciales y espacios residenciales; hasta públicos y culturales; para crear proyectos que muestren una resonancia específica dentro del espacio que está diseñado. El equipo busca la expansión del rol convencional de la figura del arquitecto, desarrollando proyectos bajo pensamientos estratégicos concebidos detrás de soluciones creativas.

<br/><br/> Cada diseño se deriva del enfoque creativo de la empresa y de su investigación analítica para satisfacer las necesidades de cada cliente, permaneciendo siempre dentro de los límites de su diseño estético. Cada cliente recibe un proyecto impulsado fundamentalmente por sus necesidades. Se busca un equipo que lleve los valores intrínsecos de un buen diseño, buenos acabados y atención al detalle para satisfacer las necesidades de los clientes y encontrar las soluciones más sostenibles para todas las partes involucradas. Musa Arquitectos está conformado por talentos con conocimiento de historia, diseño y sostenibilidad; buscando siempre las mejores referencias y habilidades en cualquier persona perteneciente a su equipo. Su motivación no sólo se basa en arquitectura, sino en la habilidad de traer buen diseño y servicio a la Ciudad de Panamá, desde un punto de vista nuevo y pragmático, con pensamientos estratégicos y a la vez estéticos.
            </div>
        </div>
    </>
  )
}