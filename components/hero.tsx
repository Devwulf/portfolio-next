import { ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/Hero.module.css";
import Earth from "./earth";

export default function Hero(): JSX.Element {
    return (
        <>
            <ParallaxLayer
                offset={0}
                speed={3.5}
                style={{
                    position: "relative",
                    width: "100%"
                }}
            >
                <Earth top="25%" left="70%" />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={2.5}
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
        </>
    );
}
