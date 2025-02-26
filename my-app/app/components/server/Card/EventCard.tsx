import React from "react";
import Image from "next/image";
import randomPic from "../../../../public/randomPic.png";
import { Box, Button, Card, Inset, Text } from "@radix-ui/themes";
import leCed from "../../../../public/randomPic.png";

const EventCard = () => {
    return (
        <Box maxWidth={'300px'}>
            <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                    <Image src={leCed} alt="" />
                </Inset>
                <Text as="p" size={"6"}>Its My Birthday !</Text>
                
            </Card>
        </Box>
    );
};

export default EventCard;
