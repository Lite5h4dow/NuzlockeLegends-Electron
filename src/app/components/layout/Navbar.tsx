import React, {useContext} from "react";
import {AppContext} from "../context/context";

import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <>
      <Menu.Item as={Link} to="/">
        Play
      </Menu.Item>
      <Menu.Item as={Link} to="/Options">
        Options
      </Menu.Item>
    </>
  );
};

export default Navbar;
