import React from "react";
import Image from "next/image";
import randomPic from "../../../public/randomPic.png";

const EventCard = () => {
    return (
        <div className="flex flex-row">
            <div className="bg-slate-300 rounded-xl mr-2 ml-2 w-96 h-[35rem]">
                <h3 className="flex justify-center m-2">By Mehdi</h3>
                <h1 className="flex justify-center m-2 text-2xl">Go drink some beer</h1>
                <Image src={randomPic} alt="Random Picture" height={290}/>
                <p className="text-xl">Where ?</p>
                <p>Pot au lait, Liège</p>
                <p className="text-xl">When ?</p>
                <p>17PM</p>
                <button className="bg-blue-300 rounded-xl w-96 h-14 mt-3">I'm going !</button>
            </div>
        </div>
    );
};

export default EventCard;
