"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const WelcomeMessage = () => {
    return (
        <div className="flex justify-center h-28" >
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Create your event with your friend !",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "and share it !",
                    1000,
                ]}
                wrapper="p"
                speed={1}
                style={{ fontSize: "2em", display: "inline-block", textAlign: "center" }}
                repeat={Infinity}
            />
        </div>
    );
};

export default WelcomeMessage;
