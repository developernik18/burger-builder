import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css'

const Layout = (porps) => (
  <Aux>
    <div>Toolbar , SideDrawer, Backdrop</div>
    <main className="Content">
      {porps.children}
    </main>
  </Aux>

);

export default Layout;