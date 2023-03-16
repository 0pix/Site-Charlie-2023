import React, {FC, useState} from 'react';
import "./Header.scss"
import json from "../../configSite.json"

type Props = {

  name: string;
};




const Header: FC<Props> = ({ name }) => {
const testjson :string = json.imageHeader
console.log(testjson)
  return <header> <img src={`../img/${testjson}`}  alt=""/> Hello {name}!</header>;
};

export default Header;
