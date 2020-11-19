import React, { Component } from "react"
import {projectStyle, aboutStyle, contactStyle, menuStyle} from './styles/menu.styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";

export interface MenuProps{
    menuOnClick(option): any;
}

export default function Menu (props: MenuProps): JSX.Element{

    return (
    <div style={menuStyle}>
        <div style={contactStyle} onClick={(e) => props.menuOnClick(LayoutTypes.Contact)}>
            Contacto
        </div>
        <div style={aboutStyle} onClick={(e) => props.menuOnClick(LayoutTypes.About)}> 
            Nosotros
        </div>
        <div style={projectStyle} onClick={(e) => props.menuOnClick(LayoutTypes.Projects)}>
            Proyectos
        </div>
    </div>
    )
}