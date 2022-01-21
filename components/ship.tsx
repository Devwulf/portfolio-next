import { useState } from "react";
import { animated, SpringRef, useSpring, useSpringRef } from "react-spring";
import { playerShip } from "./vectors";

type PlayerShipProps = {
    width?: string;
    playerX: number;
    playerY: number;
};

export default function PlayerShip(props: PlayerShipProps): JSX.Element {
    const { width = "15rem", playerX, playerY } = props;

    const startPlayerX = 50;
    const startPlayerY = 50;
    const spring = useSpring({
        from: { x: `${startPlayerX}vw`, y: `${startPlayerY}vh`, rotZ: "90deg" },
        to: { x: `${playerX}vw`, y: `${playerY}vh`, rotZ: "45deg" },
        config: {
            mass: 20,
            tension: 100,
            friction: 100,
            precision: 0.001,
            velocity: 0.001
        }
    });

    return (
        <animated.svg
            style={{
                position: "absolute",
                top: spring.y,
                left: spring.x,
                rotateZ: spring.rotZ,
                transform: "translate(-50%, -50%)",
                width,
                zIndex: -10
            }}
            viewBox="0 0 200 200"
        >
            {playerShip.shape}
        </animated.svg>
    );
}
