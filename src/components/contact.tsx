/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MiniGallery from "./miniGallery"
import {contactPageStyle, contactPageStyleMobile, contactTitleStyle,contactAddressStyle, contactCareersStyle, contactCareerDescriptionStyle} from './styles/contact.styles';

export interface ContactProps{
  width: number;
  language: string
}

export default function Contact (props:ContactProps){

  const data = useStaticQuery(
    graphql`{
      allContentfulContact {
        nodes {
          childContentfulContactAddressTextNode {
            address
          }
          childContentfulContactCareerTextNode {
            career
          }
          email
          phone
          node_locale
        }
      }
    }`)
  
  var localizedData = data.allContentfulContact.nodes.find( (node) => node.node_locale === props.language);
  
  return (
    <>
    <div style={props.width > 700 ? contactPageStyle: contactPageStyleMobile}>
        <div style={contactTitleStyle}>
            {props.language == "es" ? "Contacto" : "Contact" }
        </div>

        <div style={contactAddressStyle}>
        {localizedData.childContentfulContactAddressTextNode.address}
        <br/><br/>
        {localizedData.phone}<br/>
        {localizedData.email}<br/>
        </div>

        <div style={contactCareersStyle}>
        {props.language == "es" ? "Carreras" : "Careers" }
        </div>

        <div style={contactCareerDescriptionStyle}>
          {localizedData.childContentfulContactCareerTextNode.career}
        </div>
      </div>
    </>
  )
}