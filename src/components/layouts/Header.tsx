import React, { FC } from 'react';
import "./Header.scss"

type Props = {
  name: string;
};

const Header: FC<Props> = ({ name }) => {
  return <header>Hello {name}!</header>;
};

export default Header;
