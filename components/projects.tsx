import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import ProjectCard from "./projectCard";
import Spaceship from "./spaceship";
import Star from "./star";
import styles from "../styles/Projects.module.css";

type ProjectsProps = {
    windowWidth: number;
};

export default function Projects(props: ProjectsProps): JSX.Element {
    const { windowWidth } = props;
    return (
        <>
            <ParallaxLayer
                offset={1}
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
                offset={1}
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
                offset={1}
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
                offset={1}
                speed={0.5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: windowWidth > 600 ? "4rem" : "0rem",
                    paddingRight: windowWidth > 600 ? "4rem" : "2rem",
                    pointerEvents: "none"
                }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "72rem",
                        width: "100%"
                    }}
                >
                    <Spaceship width={windowWidth > 600 ? "24rem" : "12rem"} />
                    <div className={styles.cardsContainer}>
                        <ProjectCard
                            title="Test Title"
                            subtitle="This is a really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long test subtitle."
                            imageUrl="https://via.placeholder.com/480"
                        />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </ParallaxLayer>
        </>
    );
}
