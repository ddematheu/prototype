import React, { Component, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";
import { mobileMenusToggleStyle, line1StyleClose, line2StyleClose, line1StyleOpen, line2StyleOpen, mobileMenuContentStyle, mobileMenuStyle, contactStyleMobile, aboutStyleMobile } from "./styles/mobileMenu.styles";

export interface MobileMenuProps{
    menuOnClick(option): any;
}

export default function MobileMenu (props: MobileMenuProps): JSX.Element{

    const [extended, setExtended] = useState(false);

    return (
    <div >
        <div onClick = {(e) => {
            setExtended(!extended)
        }} style = {mobileMenusToggleStyle}>
            <div style={extended === false ? line1StyleOpen:line1StyleClose}></div>
            <div style={extended === false ? line2StyleOpen:line2StyleClose}></div>
        </div>
        {extended &&
        <div style={mobileMenuStyle}>
            <div style={mobileMenuContentStyle}>
                <div style={contactStyleMobile} onClick={(e) => {
                    props.menuOnClick(LayoutTypes.Projects)
                    setExtended(false);
                    }
                }>
                    <u>Proyectos</u>
                </div>
                <div style={aboutStyleMobile} onClick={(e) => {
                    props.menuOnClick(LayoutTypes.About)                   
                    setExtended(false);
                    }
                }> 
                   <u>Nosotros</u>
                </div>
                <div style = {contactStyleMobile} onClick={(e) => {
                    props.menuOnClick(LayoutTypes.Contact)
                    setExtended(false);
                    }
                }>
                    <u>Contacto</u>
                </div>
            </div>
        </div>}
    </div>
    )
}