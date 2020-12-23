import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#d1726b"
        strokeLinecap="round"
        {...props}
    />
)

export default function MenuToggle({ toggle }) {
    return (
    <button onClick={toggle}>
        <svg width={23} height={23} viewBox="0 0 23 23">
            <Path variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} transition={{ duration: 0.1 }}/>
            <Path variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} />
        </svg>
    </button >
    )
}