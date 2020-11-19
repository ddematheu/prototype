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
import {contactTitleStyle,contactAddressStyle, contactCareersStyle, contactCareerDescriptionStyle} from './styles/contact.styles';

export interface ContactProps{

}

export default function Contact (props:ContactProps){

  return (
    <>
        <div style={contactTitleStyle}>
            Contacto
        </div>

        <div style={contactAddressStyle}>
        Calle 55 Este Obarrio<br/>
        Edificio 1959 Piso 4<br/>
        Panamá, Panamá<br/>
        <br/>
        +507 263 72 99<br/>
        info@musaarquitectos.com<br/>
        </div>

        <div style={contactCareersStyle}>
            Careers
        </div>

        <div style={contactCareerDescriptionStyle}>
        Interested parties should send a non-returnable portfolio and CV by email or post; please note that Musa Architects is unable to return any application materials sent to us. Successful candidates will be contacted within a week of the application’s arrival. The standard procedure for recruitment is: Application review (portfolio, CV), Trial period (Panama office / three months / fee and transportation will be paid), and Staff.

        There are currently no vacancies for an internship at the Panama Office, check back for more. 
        </div>
    </>
  )
}