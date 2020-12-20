import React, { useEffect, useState } from "react"
import { constructionModalStyle, constructionModalStyleMobile, constructionStyle, mainLogoStyle, constructionTextStyle, constructionLineStyle,constructionEnglishTextStyle } from "./styles/construction.styles";
import Footer from "./footer";
import "../css/typography.css";

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
            <div style={constructionStyle}>
                <div style={width < 700 ? constructionModalStyleMobile: constructionModalStyle }>
                    <div style={mainLogoStyle}>
                        Musa
                    </div>
                    <div style={constructionTextStyle}>
                        <br/>Página en construcción.<br/><br/>
                        Si desea contactarnos, por favor enviar un correo a <br/><br/>info@musaarquitectos.com 
                    </div>
                    <div style={constructionLineStyle}>
                    </div>
                    <div style={constructionEnglishTextStyle}>
                        Under construction.<br/><br/>
                        If you would like to contact us, please send an email to <br/><br/>info@musaarquitectos.com 
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
