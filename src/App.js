// src/App.js

import React from 'react';
import Form from './Form'; 
import './App.css'; 
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
      <div>
      
        <Helmet>
          <meta
            http-equiv="Content-Security-Policy"
            //do it for your friend my brother
            content="style-src 'self' 'unsafe-inline';"
            //remove unsafe inline and see changes in form and waarning in inspect
          />
        </Helmet>

      </div>
    </HelmetProvider>
      <header className="App-header">
        <h1>Govinda..Govinda</h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
