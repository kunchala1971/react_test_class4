import React, { useState } from 'react';
import Menus from './Components/Menus';
import Todos from './Components/Todos';

const App = () => {
  return (
    <>
      <Menus />
      <Todos />
    </>
  );
};

export default App;
