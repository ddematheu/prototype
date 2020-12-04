import React from "react"
import Menu from './menu';
import Logo from './logo';
import { checkPropTypes } from "prop-types";
import { LayoutTypes } from "./layout";
import {headerStyle} from './styles/header.styles';

export interface HeaderProps{
  layoutState: string;
  changeLayout: any;
  headerOnClick: any;
}

export default function Header (props : HeaderProps) {

  return(
    <header style={headerStyle}>
        <Logo logoOnClick={props.headerOnClick}/>
        <Menu menuOnClick={props.headerOnClick}/>
    </header>
  );
}