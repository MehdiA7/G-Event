import React from "react";
import Image from "next/image";
import randomPic from "../../../../public/randomPic.png";
import { Button } from "@radix-ui/themes";

const EventCard = () => {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-300 rounded-xl mr-2 ml-2 w-96 h-[35rem] space-y-2">
                <h3 className="flex justify-center m-2 ">By Mehdi</h3>
                <h1 className="flex justify-center m-2 text-2xl">
                    Go drink some beer
                </h1>
                <Image src={randomPic} alt="Random Picture" height={290} />
                <p className="text-xl pl-2">Where ?</p>
                <p className="pl-2">Pot au lait, Liège</p>
                <p className="text-xl pl-2">When ?</p>
                <p className="pl-2">17PM</p>
                <div className="pl-2">
                    <Button size={"3"}>Go !</Button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
