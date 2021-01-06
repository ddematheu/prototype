/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {aboutTitleStyle, aboutStyleMobile, aboutDescriptionStyle, aboutStyle} from './styles/about.styles';

export interface AboutProps{
  width: number;
  language: string;
}

export default function About (props:AboutProps){

  const data = useStaticQuery(
    graphql`{
      allContentfulAbout {
        nodes {
          node_locale
          childContentfulAboutAboutTextNode {
            internal {
              content
            }
          }
        }
      }
    }`)

  var localizedData = data.allContentfulAbout.nodes.find( (node) => node.node_locale === props.language);

  return (
    <>
    <div style={props.width > 700 ? aboutStyle : aboutStyleMobile}>
        <div>
            <div style={aboutTitleStyle}> {props.language == "es" ? "Nosotros" : "About" } </div>
            <div style={aboutDescriptionStyle}>
              {localizedData.childContentfulAboutAboutTextNode.internal.content}
            </div>
        </div>
      </div>
    </>
  )
}