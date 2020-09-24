import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Navigation/SideDrawer/SideDrawer';

const Layout = (porps) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">
      {porps.children}
    </main>
  </Aux>

);

export default Layout;