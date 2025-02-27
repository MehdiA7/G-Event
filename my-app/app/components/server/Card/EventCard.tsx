import React from "react";
import Image from "next/image";
import randomPic from "../../../../public/randomPic.png";
import { Box, Button, Card, Heading, Inset, Text } from "@radix-ui/themes";
import leCed from "../../../../public/randomPic.png";
import Judy from "../../../../public/CpJudy.png";

const EventCard = () => {
    return (
        <Box maxWidth={'300px'} className="flex justify-center">
            <Card size="2" className="space-y-2">
                <Inset clip="padding-box" side="top" pb="current">
                <Heading size={"6"} className="absolute top-5 left-5">By Mehdi</Heading>
                    <Image src={Judy} alt="" />
                </Inset>
                <Text as="p" size={"8"}>Its My Birthday !</Text>
                <Text as="p" size={"5"} color="green">Mon 21 October 17PM</Text>
                <Text as="p" size={"4"}>Liège, rue des wallons 26</Text>
                <Button>Show details</Button>
            </Card>
        </Box>
    );
};

export default EventCard;
