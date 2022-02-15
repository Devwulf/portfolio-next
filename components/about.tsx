import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import ProjectCard from "./projectCard";
import Spaceship from "./spaceship";
import Star from "./star";
import styles from "../styles/About.module.css";
import Astronaut from "./astronaut";

type AboutProps = {
    windowWidth: number;
    offset: number;
};

export default function About(props: AboutProps): JSX.Element {
    const { windowWidth, offset } = props;
    return (
        <>
            <ParallaxLayer
                key={`about-star1-${offset}`}
                offset={offset}
                speed={0.1}
                style={{
                    width: "100%",
                    pointerEvents: "none"
                }}
            >
                <BobSmall>
                    <Star
                        windowWidth={windowWidth}
                        top="12%"
                        left="60%"
                        width="5rem"
                        color="#f58464"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="74%"
                        left="28%"
                        width="6rem"
                        color="#ad2109"
                    />
                </BobSmall>
            </ParallaxLayer>
            <ParallaxLayer
                key={`about-star2-${offset}`}
                offset={offset}
                speed={0.2}
                style={{
                    width: "100%",
                    pointerEvents: "none"
                }}
            >
                <BobMedium>
                    <Star
                        windowWidth={windowWidth}
                        top="10%"
                        left="17%"
                        width="4rem"
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="76%"
                        left="90%"
                        width="4rem"
                        color="#ebbb2a"
                    />
                </BobMedium>
            </ParallaxLayer>
            <ParallaxLayer
                key={`about-star3-${offset}`}
                offset={offset}
                speed={0.3}
                style={{
                    width: "100%",
                    pointerEvents: "none"
                }}
            >
                <BobLarge>
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="85%"
                        left="65%"
                        width="3rem"
                        color="#71c7b6"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="34%"
                        left="10%"
                        width="2rem"
                        color="#c7f0ff"
                    />
                </BobLarge>
            </ParallaxLayer>
            <ParallaxLayer
                key={`about-content-${offset}`}
                offset={offset}
                speed={0.5}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: windowWidth > 600 ? "4rem" : "2rem",
                    paddingRight: windowWidth > 600 ? "4rem" : "0rem",
                    pointerEvents: "none"
                }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "72rem",
                        width: "100%",
                        height: "80%"
                    }}
                >
                    <Astronaut height={windowWidth > 600 ? "66vh" : "12rem"} />
                    <div className={styles.about}>
                        <h1 className={styles.title}>About Me</h1>
                        <div className={styles.content}>
                            <ProjectCard
                                title="Test Title"
                                subtitle="This is a really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long test subtitle."
                            />
                        </div>
                    </div>
                    {/*
                    <div className={styles.about2}>
                        <h1 className={styles.title}>About Me</h1>
                    </div>
                    */}
                </div>
            </ParallaxLayer>
        </>
    );
}
