import React from 'react';
import Aux from '../../hoc/Auxiliary';

const Layout = (porps) => (
  <Aux>
    <div>Toolbar , SideDrawer, Backdrop</div>
    <main>
      {porps.children}
    </main>
  </Aux>

);

export default Layout;