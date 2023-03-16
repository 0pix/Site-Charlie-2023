import React, {FC, useState} from 'react';
import "./Header.scss"
import json from "../../configSite.json"
import {Link} from "react-router-dom";
import Login from "../../pages/login/Login";

type Props = {
  name: string;
};

const Header: FC<Props> = ({ name}) => {
  const testjson :string = json.imageHeader
  console.log(json)
  return(
  <header style={{borderBottom: `3px solid ${json.colorBorderHeader}`}}>
    <img src={`../img/${testjson}`}  alt=""/> Hello {name}!
    <ul>
      <Link to={"/"}>Login</Link>
      <Link to={"/home"}>Home</Link>
    </ul>
  </header>

  )
};
export default Header;
