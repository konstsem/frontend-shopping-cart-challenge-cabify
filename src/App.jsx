import React from 'react';
import { render } from 'react-dom';

import Main from 'Main';
// import cart from './cart';

export default function App(co) {
  render(<Main co={co} />, document.getElementById('root'));
}
