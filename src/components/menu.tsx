import React, { Component } from "react"

import {menuStyle} from './styles/menu.styles';

export interface MenuProps{
    menuOnClick(): any;
}

export default function Menu (props: MenuProps): JSX.Element{
    return (
    <div style={menuStyle} onClick={props.menuOnClick}>
        <h3 style={{ margin: 0 }}>
            Menu
        </h3>
    </div>
    )
}