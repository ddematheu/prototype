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
import {contactPageStyle, contactTitleStyle,contactAddressStyle, contactCareersStyle, contactCareerDescriptionStyle} from './styles/contact.styles';

export interface ContactProps{

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
        }
      }
    }`)

  console.log(data.allContentfulContact.nodes[0].childContentfulContactAddressTextNode.address)

  return (
    <>
    <div style={contactPageStyle}>
        <div style={contactTitleStyle}>
            Contacto
        </div>

        <div style={contactAddressStyle}>
        {data.allContentfulContact.nodes[0].childContentfulContactAddressTextNode.address}
        <br/><br/>
        {data.allContentfulContact.nodes[0].phone}<br/>
        {data.allContentfulContact.nodes[0].email}<br/>
        </div>

        <div style={contactCareersStyle}>
            Careers
        </div>

        <div style={contactCareerDescriptionStyle}>
          {data.allContentfulContact.nodes[0].childContentfulContactCareerTextNode.career}
        </div>
      </div>
    </>
  )
}