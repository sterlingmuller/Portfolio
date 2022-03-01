import React, { useState } from 'react';
import RouteComponent from '../RouteComponent.jsx';
import { MainContext } from '../MainContext.js';

const App = () => {


  return (
    <div className='main'>
      <MainContext.Provider value={{

      }}>
        <RouteComponent />
      </MainContext.Provider>
    </div>
  );
}

export default App;

