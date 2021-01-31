import React, { useEffect, useState } from "react"
import {constructionMobileTextStyle, constructionStyle, mainLogoStyle, constructionTextStyle, constructionLineStyle,constructionEnglishTextStyle, constructionMobileLineStyle, constructionMobileStyle } from "./styles/construction.styles";
import Footer from "./footer";
import './styles/layout.css'
import './styles/construction.css'
import "../css/typography.css";
import Div100vh from 'react-div-100vh';
import {TransitionGroup, Transition, CSSTransition } from "react-transition-group"

export interface ConstructionProps{

}

export default function Construction (props:ConstructionProps){

    const [width, setWidth] = useState(701)
    const [inProp, setInProp] = useState(false);
    const duration = 1000;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        setWidth(window.innerWidth)
        setInProp(true);
      }, [])

    return (
        <>
        <TransitionGroup>     
            <Div100vh>
                <CSSTransition in={inProp} timeout={duration} classNames="construction" >
                    <div style={width > 700 ? constructionStyle : constructionMobileStyle}>
                        <div style={mainLogoStyle}>
                            Musa
                        </div>
                        <div style={width > 700 ? constructionTextStyle : constructionMobileTextStyle}>
                            <br/>Página en construcción.<br/><br/>
                            Si desea contactarnos, por favor enviar un correo a <br/><br/>info@musaarquitectos.com 
                        </div>
                        <div style={width > 700 ? constructionLineStyle : constructionMobileLineStyle}>
                        </div>
                        <div style={constructionEnglishTextStyle}>
                            Under construction.<br/><br/>
                            If you would like to contact us, please send an email to <br/><br/>info@musaarquitectos.com 
                        </div>
                    </div>
                </CSSTransition>
                <Footer width = {width}/>
            </Div100vh>
        </TransitionGroup>
        </>
    )
}
