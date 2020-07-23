import React, { Component } from "react"
import { Link } from "gatsby"

import {logoStyle} from './styles/logo.styles';

export interface LogoProps{
    logoOnClick(): void;
    siteTitle: string;
}

export default function Logo (props: LogoProps): JSX.Element{
    return (
    <div style={logoStyle}>
        <h3 style={{ margin: 0 }}>
        <Link
        to="/"
        style={{
            color: `black`,
            textDecoration: `none`,
        }}
        >
        {props.siteTitle}
        </Link>
        </h3>
    </div>
    );
}