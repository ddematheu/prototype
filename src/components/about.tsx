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
}

export default function About (props:AboutProps){

  const data = useStaticQuery(
    graphql`{
      allContentfulAbout {
        nodes {
          childContentfulAboutAboutTextNode {
            internal {
              content
            }
          }
        }
      }
    }`)

  return (
    <>
    <div style={props.width > 700 ? aboutStyle : aboutStyleMobile}>
        <div>
            <div style={aboutTitleStyle}>Nosotros</div>
            <div style={aboutDescriptionStyle}>
              {data.allContentfulAbout.nodes[0].childContentfulAboutAboutTextNode.internal.content}
            </div>
        </div>
      </div>
    </>
  )
}