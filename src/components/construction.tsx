import "../css/typography.css";

import React, { useEffect, useRef, useState } from "react"
import { constructionModalStyle, constructionModalStyleMobile, constructionStyle, mainLogoStyle, constructionTextStyle } from "./styles/construction.styles";
import Footer from "./footer";
import Logo from "./logo";

export interface ConstructionProps{

}

export default function Construction (props:ConstructionProps){

    const [width, setWidth] = useState(500)

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        setWidth(window.innerWidth)
      }, [])

    return (
        <>
            <div style={constructionStyle}>
                <div style={width < 500 ? constructionModalStyleMobile: constructionModalStyle }>
                    <div style={mainLogoStyle}>
                        Musa
                    </div>
                    <div style={constructionTextStyle}>
                    <br/>Página en construcción.<br/><br/>
                    Si desea contactarnos, por favor enviar un correo a <br/><br/>info@musaarquitectos.com 
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}