import React, { Component } from "react"

import Logo from './logo';
import {logoContentStyle} from './styles/logo.styles';
import Email from './email';

import { contentStyle, contentTextStyle } from './styles/content.styles';

export interface ContentProps{
    
}

export default function Content (props: ContentProps){
    return(
    <>
        <div style={contentStyle}>
            <div style={logoContentStyle}>
                <Logo />
            </div>
            <h1 style={contentTextStyle}>Prototype Page </h1>
            <p style={contentTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id faucibus dui, non tempor nisi. Pellentesque eget arcu magna. Mauris consequat a enim ac pharetra.</p>
            <p style={contentTextStyle}>Mauris eu nisi felis. Cras eu aliquam risus. Nulla a ornare torto.</p>
            <Email />
        </div>
    </>
    );
}