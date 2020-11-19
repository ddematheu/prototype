import React from "react"
import Menu from './menu';
import Logo from './logo';
import { checkPropTypes } from "prop-types";
import { LayoutTypes } from "./layout";
import {headerStyle} from './styles/header.styles';

export interface HeaderProps{
  siteTitle: string;
  layoutState: string;
  changeLayout: any;
}

export default function Header (props : HeaderProps) {
  function headerOnClick(option){
    console.log("changing layout");
    return option != props.layoutState ? props.changeLayout(option) : 1;
  }

  return(
    <header style={headerStyle}>
        <Menu menuOnClick={headerOnClick}/>
        <Logo logoOnClick={headerOnClick}/>
    </header>
  );
}