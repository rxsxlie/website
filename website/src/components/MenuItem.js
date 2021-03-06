import * as React from "react";
import { motion } from "framer-motion";
import { Button } from 'evergreen-ui';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        // y: 50,
        // opacity: 0,
        // transition: {
        //     y: { stiffness: 1000 }
        // }
    }
};

const colors = ["#d1726b", "#d1726b", "#d1726b"];

export const MenuItem = ({ i }) => {
    return (
        <>
            <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button href="./" is="a" appearance="minimal" style={{ color: `${colors[0]}`, fontWeight: 'bold', letterSpacing: '2px', fontStyle: 'italic' }} >
                    Home
                </Button>
            </motion.li>
            <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}> 
                <Button href="./me" is="a" appearance="minimal" style={{ color: `${colors[1]}`,fontWeight: 'bold', letterSpacing: '2px', fontStyle: 'italic' }} >
                        About Me
                </Button>
            </motion.li>
            <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button href="./animations" is="a" appearance="minimal" style={{ color: `${colors[2]}`,fontWeight: 'bold', letterSpacing: '2px', fontStyle: 'italic' }} >
                            Portfolio
                </Button>
            </motion.li>
            </>
    );
};