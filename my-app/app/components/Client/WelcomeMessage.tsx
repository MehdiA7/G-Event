"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const WelcomeMessage = () => {
    return (
        <div className="flex justify-center">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Create your event with your friend",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "and share it !",
                    1000,
                ]}
                wrapper="span"
                speed={1}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
            />
        </div>
    );
};

export default WelcomeMessage;
