import React, { MutableRefObject, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"
import { projectsStyle, projectsDescriptionStyle, projectImagesMobile, galleryStyleMobile, nameOverlayStyle, projectNameMobileStyle, imageMobile, projectsDescriptionMobileStyle, galleryStyle, projectImages, image } from "./styles/projects.styles"
import { LayoutTypes } from "./layout"
import './styles/projects.css'

export interface ProjectsPageProps{
    layoutState: string;
    changeLayout: any;
    projectSelect: string;
    selectProject: any;
    data: any;
    width:number;
    language: string;
}

export default function Projects (props:ProjectsPageProps){

  function imageOnClick(option){
    window.scrollTo(0, 0)
    props.selectProject(option);
    console.log(option)
    return props.changeLayout(LayoutTypes.Selected);
  }

  const data = useStaticQuery(
    graphql`{
      allContentfulProjectsDescription {
        nodes {
          childContentfulProjectsDescriptionDescriptionTextNode {
            id
            description
          }
          node_locale
        }
      }
    }`)

  var localizedData = data.allContentfulProjectsDescription.nodes.find( (node) => node.node_locale === props.language);

  function imageGalleryGenerator () {
    const imageGallery = props.data.allContentfulProject.edges.map( (value: any, index: number ) => (
            <div className = 'imageContainer' key={value.node.id} style={props.width >  700 ? image : imageMobile} onClick={(e) => imageOnClick(value.node.contentful_id)}>
                <Img style={props.width > 700 ? projectImages : projectImagesMobile} fixed={value.node.thumbnail.fixed} />
                {props.width < 700 ? <div style = {projectNameMobileStyle}>
                  {value.node.name}
                  </div> : <div className = 'overlay' style = {nameOverlayStyle}>
                    {value.node.name}
                    </div>
                }
            </div>
        )
    );
    return imageGallery
  }
  
  return (
    <>
    <div id="projects" style={projectsStyle}>
      <div style={props.width > 700 ? projectsDescriptionStyle: projectsDescriptionMobileStyle }>
        <u>{props.language == "es" ? "Proyectos" : "Projects" }</u><br/><br/>
        {localizedData.childContentfulProjectsDescriptionDescriptionTextNode.description}
      </div>
      <div style={props.width > 700 ? galleryStyle : galleryStyleMobile}>
        {imageGalleryGenerator()}
      </div>
    </div>
    </>
  )
}
