import React from 'react';
import {Body} from "./Layout.style";

const Layout = props => {
  return (
    <Body>
      {props.children}
    </Body>
  );
};

export default Layout;
