import React from 'react';
import { Avatar, Box, HStack, Heading, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';

export default function PostCard(props) {
    return (
        <Box style={{ marginTop: 10 }}>
            <HStack spacing='15px' mt={8} alignItems="center">
                <Avatar size='sm' name={props.post.name} src={props.post.avatar} />
                <Heading fontWeight={500} size='sm'>{props.post.name}</Heading>
                <BsDot />
                <Heading fontWeight={500} size='xs'>1, August, 2004</Heading>
            </HStack>

            <Link to={"/home/" + props.post.id}>
                <Heading
                    style={{
                        fontFamily: "sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                    as='h4'
                    fontSize={[18, 20, 22]} // Responsive font size
                    mt={3}
                >
                    {props.post.genre}
                </Heading>

                <Text
                    style={{
                        fontFamily: "charter, Georgia, Cambria, 'Times New Roman', Times, serif",
                        color: "rgba(41, 41, 41, 1)",
                        letterSpacing: ".2px",
                    }}
                    fontSize={["14px", "15px", "16px"]} // Responsive font size
                    mt={3}
                >
                    {props.post.desp} . . . .
                </Text>

                <HStack spacing='5px' mt={4} alignItems="center">
                    <Text
                        fontSize={["12px", "13px"]} // Responsive font size
                        color='rgba(117, 117, 117, 1)'
                    >
                        {Math.round(Math.random() * 7 + 1)} min read
                    </Text>
                    <BsDot />
                </HStack>
            </Link>
        </Box>
    );
}
