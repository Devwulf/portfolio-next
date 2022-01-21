import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import PlayerShip from "./ship";

export default function TowerDefense(): JSX.Element {
    const [playerX, setPlayerX] = useState(50);
    const [playerY, setPlayerY] = useState(50);
    return (
        <ParallaxLayer
            offset={0}
            speed={1.0}
            style={{
                width: "100%"
            }}
            onClick={(event) => {
                const x = clamp(
                    (event.clientX / window.innerWidth) * 100,
                    0,
                    100
                );
                const y = clamp(
                    (event.clientY / window.innerHeight) * 100,
                    0,
                    100
                );
                setPlayerX(x);
                setPlayerY(y);
            }}
        >
            <PlayerShip playerX={playerX} playerY={playerY} width="100px" />
        </ParallaxLayer>
    );
}

function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
}
