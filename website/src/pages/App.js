import React from 'react';
import Menu from '../components/Menu';
import { Button, Box, Pane } from 'evergreen-ui'
import { motion } from "framer-motion"





function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <Pane marginTop="30%" marginBottom="1%" color="#47B881">
        <h1 style={{ fontSize: "350px", fontFamily: "Arial", fontStyle: "italic", textShadow: "10px 10px #000" }}>
          Rosalie
      </h1>
      </Pane>
    </>
  );
}

export default App;
