import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Earth from "./earth";
import Moon from "./moon";
import Star from "./star";
import starfield from "../assets/starfield.png";
import Image from "next/image";
import { BobLarge, BobMedium, BobSmall } from "./bob";

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
                speed={0.25}
                style={{
                    width: "100%"
                }}
            >
                <BobSmall>
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="24%"
                        left="28%"
                        width="5rem"
                        color="#f58464"
                        duration={4000}
                        haloScale={1.1}
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="12%"
                        left="60%"
                        width="6rem"
                        color="#ad2109"
                        duration={4000}
                        haloScale={1.1}
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="66%"
                        left="47%"
                        width="5rem"
                        color="#f58464"
                        duration={4000}
                        haloScale={1.1}
                    />
                </BobSmall>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{
                    width: "100%"
                }}
            >
                <BobMedium>
                    <Star
                        windowWidth={windowWidth}
                        top="10%"
                        left="17%"
                        width="4rem"
                        haloScale={1.2}
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="6%"
                        left="80%"
                        width="4rem"
                        color="#ebbb2a"
                        duration={3000}
                        haloScale={1.1}
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="85%"
                        left="22%"
                        width="4rem"
                        haloScale={1.2}
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="76%"
                        left="90%"
                        width="4rem"
                        color="#ebbb2a"
                        duration={3000}
                        haloScale={1.1}
                    />
                </BobMedium>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0.75}
                style={{
                    width: "100%"
                }}
            >
                <BobLarge>
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="34%"
                        left="10%"
                        width="3rem"
                        color="#71c7b6"
                        duration={1000}
                        haloScale={1.3}
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="30%"
                        left="50%"
                        width="2rem"
                        color="#c7f0ff"
                        duration={1000}
                        haloScale={1.25}
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="74%"
                        left="6%"
                        width="3rem"
                        color="#71c7b6"
                        duration={1000}
                        haloScale={1.3}
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="80%"
                        left="85%"
                        width="2rem"
                        color="#c7f0ff"
                        duration={1000}
                        haloScale={1.25}
                    />
                </BobLarge>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={1}
                style={{
                    width: "100%",
                    pointerEvents: "none"
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
                speed={2.0}
                style={{
                    width: "100%",
                    pointerEvents: "none"
                }}
            >
                <Earth top="25%" left="70%" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={3.25}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    pointerEvents: "none"
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
                speed={5}
                style={{
                    width: "100%",
                    pointerEvents: "none"
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
