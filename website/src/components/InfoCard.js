import React from 'react';
import { Pane, Button, Heading, Text, UnorderedList, TickIcon, ListItem, DotIcon, StarIcon, MobilePhoneIcon, Link } from 'evergreen-ui'
import { setColors, colors } from '../Colors';



export default function InfoCard(props) {
    return (
        <Pane  background={colors.lightPeach}  elevation={4} width={400} height={240} margin={24} display="flex" flexDirection="column">
            <Heading margin={15} size={200} color= {colors.darkPeach} style={{ marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold', letterSpacing: '2px', fontStyle: 'italic' }}>
                {props.title}
            </Heading>
            {props.children}
        </Pane>
    )

}
