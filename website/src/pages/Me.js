import React from 'react';
import Menu from '../components/Menu';
import { Pane, Button, Heading, Text, UnorderedList, TickIcon, ListItem, DotIcon, StarIcon, MobilePhoneIcon, Link } from 'evergreen-ui'
import {setColors, colors} from '../Colors';


export default function Me() {


    return (
        <>

            <Pane display="flex" flexDirection="horizontal">

                <Heading size={600} margin={30} style={{ color: '#00783E', letterSpacing: '3px', marginLeft: '45%' }}>
                    ABOUT ME
                </Heading>
            </Pane>
            <Pane display="flex" justifyContent="center">
                <Pane background={colors.darkPeach}  elevation={4} width={400} height={240} margin={24} display="flex" flexDirection="column">
                    <Heading margin={15} size={100} style={{ color: '#00783E', marginLeft: 'auto', marginRight: 'auto' }}>
                        Education
                    </Heading>
                    <UnorderedList icon={TickIcon} iconColor="success" marginLeft={30} marginRight={10}>
                        <ListItem style={{ fontWeight: 'bold' }}>VWO</ListItem>
                        <Text marginLeft={20} marginRight={10}> 2012-2018 Stedelijk Gymnasium Arnhem </Text>
                        <ListItem style={{ fontWeight: 'bold' }}>BSc Creative Technology</ListItem>
                        <Text marginLeft={20} marginRight={10}> 2018-2021 University of Twente </Text>
                    </UnorderedList>
                </Pane>
                <Pane elevation={2} width={400} height={240} margin={24} display="flex" flexDirection="column">
                    <Heading margin={15} size={100} marginTop="default" style={{ color: '#00783E', marginLeft: 'auto', marginRight: 'auto' }}>
                        Hobby's
                    </Heading>
                    <UnorderedList icon={DotIcon} iconColor="success" marginLeft={30} marginRight={10}>
                        <ListItem>Drawing</ListItem>
                        <ListItem>Baking</ListItem>
                        <ListItem>Music</ListItem>
                    </UnorderedList>
                </Pane>
            </Pane>
            <Pane display="flex" justifyContent="center">
                <Pane elevation={2} width={400} height={240} margin={24} display="flex" flexDirection="column">
                    <Heading margin={15} size={100} marginTop="default" style={{ color: '#00783E', marginLeft: 'auto', marginRight: 'auto' }}>
                        Skills
                    </Heading>
                    <UnorderedList icon={TickIcon} iconColor="success" marginLeft={30} marginRight={10}>
                        <ListItem>Tableau ★★★★☆</ListItem>
                        <ListItem>SolidWorks ★★★☆☆</ListItem>
                        <ListItem>Arduino ★★★★☆</ListItem>
                    </UnorderedList>
                </Pane>
                <Pane elevation={2} width={400} height={240} margin={24} display="flex" flexDirection="column">
                    <Heading margin={15} size={100} marginTop="default" style={{ color: '#00783E', marginLeft: 'auto', marginRight: 'auto' }}>
                        Social media
                    </Heading>
                    <UnorderedList icon={MobilePhoneIcon} iconColor="success" marginLeft={30} marginRight={10}>
                        <ListItem>
                            <Link href="https://www.instagram.com/studyingrose/" target="_blank" color="neutral">Instagram</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/roos_alie_b" target="_blank" color="neutral">Twitter</Link>
                        </ListItem>
                    </UnorderedList>
                </Pane>
            </Pane>
            <div>
                <Menu />
            </div>

        </>
    );

}