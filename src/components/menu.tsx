import React, { Component } from "react"
import {projectStyle, aboutStyle, contactStyle, menuStyle, languageStyle} from './styles/menu.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MenuProps{
    menuOnClick(option): any;
    language: string;
    setLanguage: any;
}

export default function Menu (props: MenuProps): JSX.Element{

    return (
    <div style={menuStyle}>
        <div style={languageStyle} >
            <span onClick = {(e) => props.setLanguage('en-US')}>Eng</span>/<span onClick = {(e) => props.setLanguage('es')}>Esp</span>
        </div>
        <div style={contactStyle} onClick={(e) => props.menuOnClick(LayoutTypes.Contact)}>
            {props.language == "es" ? "Contacto" : "Contact" }
        </div>
        <div style={aboutStyle} onClick={(e) => props.menuOnClick(LayoutTypes.About)}> 
            {props.language == "es" ? "Nosotros" : "About" }
        </div>
        <div style={projectStyle} onClick={(e) => props.menuOnClick(LayoutTypes.Projects)}>
            {props.language == "es" ? "Proyectos" : "Projects" }
        </div>
    </div>
    )
}