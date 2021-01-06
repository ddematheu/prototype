import React, { useEffect, useState } from "react"
import {constructionMobileTextStyle, constructionStyle, mainLogoStyle, constructionTextStyle, constructionLineStyle,constructionEnglishTextStyle, constructionMobileLineStyle, constructionMobileStyle } from "./styles/construction.styles";
import Footer from "./footer";
import './styles/layout.css'
import "../css/typography.css";
import Div100vh from 'react-div-100vh';

export interface ConstructionProps{

}

export default function Construction (props:ConstructionProps){

    const [width, setWidth] = useState(700)

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        setWidth(window.innerWidth)
      }, [])

    return (
        <>
        <Div100vh>
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
            <Footer/>
        </Div100vh>
        </>
    )
}
