import React, { Component, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";
import { mobileMenusToggleStyle, line1StyleClose, line2StyleClose, line1StyleOpen, line2StyleOpen, mobileMenuContentStyle, mobileMenuStyle, contactStyleMobile, aboutStyleMobile, languageStyleMobile } from "./styles/mobileMenu.styles";

export interface MobileMenuProps{
    menuOnClick(option): any;
    language: string;
    setLanguage: any;
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
                    <u>{props.language == "es" ? "Proyectos" : "Projects" }</u>
                </div>
                <div style={aboutStyleMobile} onClick={(e) => {
                    props.menuOnClick(LayoutTypes.About)                   
                    setExtended(false);
                    }
                }> 
                   <u>{props.language == "es" ? "Nosotros" : "About" }</u>
                </div>
                <div style = {contactStyleMobile} onClick={(e) => {
                    props.menuOnClick(LayoutTypes.Contact)
                    setExtended(false);
                    }
                }>
                    <u>{props.language == "es" ? "Contacto" : "Contact" }</u>
                </div>
                <div style = {languageStyleMobile}>
                <span onClick = {(e) => props.setLanguage('en-US')}>Eng</span>, <span onClick = {(e) => props.setLanguage('es')}>Esp</span>
                </div>
            </div>
        </div>}
    </div>
    )
}