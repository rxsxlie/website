import React from 'react';
import Menu from '../components/Menu';
import { Pane, Button, Heading, Text, UnorderedList, TickIcon, ListItem, DotIcon, StarIcon, MobilePhoneIcon, Link } from 'evergreen-ui'
import {setColors, colors} from '../Colors';
import InfoCard from '../components/InfoCard'


export default function Me() {


    return (
        <>

            <Pane display="flex">
                <Heading size={900} margin={30} color={colors.darkPeach} style={{ fontWeight: 'bold', fontStyle:'italic', letterSpacing: '15px', marginLeft: '41%', textShadow: "2px 2px #a14b45" }}>
                    ABOUT ME
                </Heading>
            </Pane>
            <Pane display="flex" justifyContent="center">
                <InfoCard title="education">
                    <UnorderedList icon={TickIcon} iconColor={colors.darkPeach} marginLeft={30} marginRight={10}>
                        <ListItem style={{ fontWeight: 'bold' }}>VWO</ListItem>
                        <Text marginLeft={20} marginRight={10}> 2012-2018 Stedelijk Gymnasium Arnhem </Text>
                        <ListItem style={{ fontWeight: 'bold' }}>BSc Creative Technology</ListItem>
                        <Text marginLeft={20} marginRight={10}> 2018-2021 University of Twente </Text>
                    </UnorderedList>
                </InfoCard>
                <InfoCard title="hobby's">
                    <UnorderedList icon={DotIcon} iconColor={colors.darkPeach} marginLeft={30} marginRight={10}>
                        <ListItem>Drawing</ListItem>
                        <ListItem>Baking</ListItem>
                        <ListItem>Music</ListItem>
                    </UnorderedList>
                </InfoCard>
                </Pane>
                <Pane display="flex" justifyContent="center">
                <InfoCard title="skills">
                    <UnorderedList icon={TickIcon} iconColor={colors.darkPeach} marginLeft={30} marginRight={10}>
                        <ListItem>Tableau ★★★★☆</ListItem>
                        <ListItem>SolidWorks ★★★☆☆</ListItem>
                        <ListItem>Arduino ★★★★☆</ListItem>
                    </UnorderedList>
                </InfoCard>
                <InfoCard title="social media">
                    <UnorderedList icon={MobilePhoneIcon} iconColor={colors.darkPeach} marginLeft={30} marginRight={10}>
                        <ListItem>
                            <Link href="https://www.instagram.com/studyingrose/" target="_blank" color="neutral">Instagram</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/roos_alie_b" target="_blank" color="neutral">Twitter</Link>
                        </ListItem>
                    </UnorderedList>
                </InfoCard>
            </Pane>
            <div>
                <Menu />
            </div>

        </>
    );

}