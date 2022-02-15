import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import ProjectCard from "./projectCard";
import Spaceship from "./spaceship";
import Star from "./star";
import styles from "../styles/Projects.module.css";

type ProjectsProps = {
    windowWidth: number;
    offset: number;
};

export default function Projects(props: ProjectsProps): JSX.Element {
    const { windowWidth, offset } = props;
    const newOffset = windowWidth <= 1200 ? offset + 1 : offset;
    return (
        <>
            <ParallaxLayer
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
            {windowWidth <= 1200 && (
                <ParallaxLayer
                    offset={offset}
                    speed={1}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        pointerEvents: "none",
                        height: "150vh",
                        marginTop: "-30vh"
                    }}
                >
                    <div
                        className=""
                        style={{
                            position: "absolute",
                            display: "flex",
                            maxWidth: "72rem",
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <Spaceship width="100%" />
                    </div>
                </ParallaxLayer>
            )}
            <ParallaxLayer
                key={`projects-content-${newOffset}`}
                offset={newOffset}
                speed={0.5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: windowWidth > 600 ? "4rem" : "2rem",
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
                    <div className={styles.projects}>
                        <h1 className={styles.title}>Projects</h1>
                        <div className={styles.cardsContainer}>
                            <ProjectCard
                                title="Test Title"
                                subtitle="This is a really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long test subtitle."
                                imageUrl={
                                    windowWidth > 600
                                        ? "https://via.placeholder.com/480"
                                        : undefined
                                }
                            />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                    {windowWidth > 1200 && <Spaceship width="24rem" />}
                </div>
            </ParallaxLayer>
        </>
    );
}
