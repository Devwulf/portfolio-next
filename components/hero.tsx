import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import { useChain, useSpring, useSpringRef, useTrail } from "react-spring";
import styles from "../styles/Hero.module.css";
import Earth from "./earth";
import Moon from "./moon";

export default function Hero(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{
                    width: "100%"
                }}
            >
                <Moon
                    top="20%"
                    width="6rem"
                    shade="small"
                    windowWidth={windowWidth}
                />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={1.0}
                style={{
                    width: "100%"
                }}
            >
                <Earth top="25%" left="70%" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={2.25}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "2rem",
                    paddingRight: "2rem"
                }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        maxWidth: "72rem",
                        width: "100%"
                    }}
                >
                    <h1 className={styles.title}>Hi. I'm Mark Malabanan.</h1>
                    <p className={styles.subtitle}>
                        I'm a full-stack developer skilled in React, Asp.NET
                        Core, Python.
                    </p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={2.75}
                style={{
                    width: "100%"
                }}
            >
                <Moon
                    top="45%"
                    width="48rem"
                    shade="large"
                    windowWidth={windowWidth}
                />
            </ParallaxLayer>
        </>
    );
}
