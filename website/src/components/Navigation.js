import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {} from 'evergreen-ui';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

// Contents of the menu
export default function Navigation() {
    return (
        <motion.div className='animetedlist' variants={variants} >
            {itemIds.map(i => (
                <MenuItem i={i} key={i} />
            ))}
        </motion.div>
    );
}

const itemIds = [0];
