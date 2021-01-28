import React, { Component, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LayoutTypes } from "./layout";
import { mobileMenuFooter, mobileMenusToggleStyle, line1StyleClose, line2StyleClose, line1StyleOpen, line2StyleOpen, mobileMenuContentStyle, mobileMenuStyle, contactStyleMobile, aboutStyleMobile, languageStyleMobile, projectStyleMobile } from "./styles/mobileMenu.styles";
import './styles/mobileMenu.css'
import {TransitionGroup, Transition, CSSTransition} from "react-transition-group";
import { instagramStyle } from "./styles/footer.styles";


export interface MobileMenuProps{
    menuOnClick(option): any;
    language: string;
    setLanguage: any;
    width: number;
}


export default function MobileMenu (props: MobileMenuProps): JSX.Element{

    const data = useStaticQuery(
        graphql`
            query {
                facebook: file(relativePath: { eq: "facebook.png" }) {
                    childImageSharp {
                    fixed(width: 15, height: 22) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                twitter: file(relativePath: { eq: "twitter.png" }) {
                    childImageSharp {
                    fixed(width: 19, height: 17) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                instagram: file(relativePath: { eq: "instagram.jpg" }) {
                    childImageSharp {
                    fixed(width: 22, height: 22) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                allContentfulSocial(limit: 1) {
                    nodes {
                      instagram
                      twitter
                      facebook
                    }
                }
            }
        `)

    const [extended, setExtended] = useState(false);

    const duration = 200;

    return (
    <div >
        <div onClick = {(e) => {
            setExtended(!extended)
        }} style = {mobileMenusToggleStyle}>
            <div className ='toggle' style={extended === false ? line1StyleOpen:line1StyleClose}></div>
            <div className ='toggle' style={extended === false ? line2StyleOpen:line2StyleClose}></div>
        </div>
        <TransitionGroup>
            {extended &&
            <CSSTransition in={extended} timeout={duration} classNames="mobile-menu">         
                    <div >
                        <div style={mobileMenuStyle}>
                            <div style={mobileMenuContentStyle}>
                                <div style={projectStyleMobile} onClick={(e) => {
                                    props.menuOnClick(LayoutTypes.ProjectsMobile)
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
                                <div style={mobileMenuFooter}>
                                    <a href={data.allContentfulSocial.nodes[0].instagram}><Img fixed={data.instagram.childImageSharp.fixed} style={instagramStyle} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </CSSTransition>
            }
        </TransitionGroup>
    </div>
    )
}