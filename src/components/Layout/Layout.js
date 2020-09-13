import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (porps) => (
  <Aux>
    <Toolbar />
    <main className="Content">
      {porps.children}
    </main>
  </Aux>

);

export default Layout;