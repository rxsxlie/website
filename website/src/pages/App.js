import React from 'react';
import Menu from '../components/Menu';
import { Button, Box, Pane, Image } from 'evergreen-ui'
import { motion } from "framer-motion"
import {setColors, colors} from '../Colors';
import Harry from '../resources/harry.jpg';
import InfoCard from '../components/InfoCard'


function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <InfoCard>
        <Image height={240} width={400} marginTop={-30} src={Harry}/>
      </InfoCard>
      <Pane marginTop="200px" marginBottom="1%" color={colors.darkPeach}>
        <h1 style={{ fontSize: "350px", fontFamily: "Arial", fontStyle: "italic", textShadow: "10px 10px #a14b45" }}>
          Rosalie
      </h1>
      </Pane>
    </>
  );
}

export default App;
