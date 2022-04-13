import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import Star from "./star";
import styles from "../styles/About.module.css";
import Astronaut from "./astronaut";
import { AboutMe } from "../types/AboutMe";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type AboutProps = {
    windowWidth: number;
    offset: number;
    aboutMe?: AboutMe;
};

const placeholderContent = `I'm passionate about finding solutions to problems and 
    turning those solutions into elegantly written and organized code. 
    I'm always on the lookout for improvements in the code, always pushing 
    myself to grow and learn new things. Besides coding, I've recently 
    been enjoying statistics, working with Big Data, and machine learning. 
    I'm currently working on a web application with Balancy, creating a tool 
    for game developers to better balance their games.`;

export default function About(props: AboutProps): JSX.Element {
    const { windowWidth, offset, aboutMe } = props;
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
                        cullUnderWindowWidth={600}
                        top="24%"
                        left="28%"
                        width="5rem"
                        color="#f58464"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="12%"
                        left="60%"
                        width="6rem"
                        color="#ad2109"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="66%"
                        left="47%"
                        width="5rem"
                        color="#f58464"
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
                        top="6%"
                        left="80%"
                        width="4rem"
                        color="#ebbb2a"
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="85%"
                        left="22%"
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
                        top="34%"
                        left="10%"
                        width="3rem"
                        color="#71c7b6"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="30%"
                        left="50%"
                        width="2rem"
                        color="#c7f0ff"
                    />
                    <Star
                        windowWidth={windowWidth}
                        top="74%"
                        left="6%"
                        width="3rem"
                        color="#71c7b6"
                    />
                    <Star
                        windowWidth={windowWidth}
                        cullUnderWindowWidth={600}
                        top="80%"
                        left="85%"
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
                    paddingLeft: windowWidth > 1000 ? "4rem" : "0rem",
                    paddingRight: windowWidth > 1000 ? "4rem" : "0rem",
                    pointerEvents: "none"
                }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: windowWidth > 1000 ? "row" : "column",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "72rem",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Astronaut height={windowWidth > 1000 ? "66vh" : "40vh"} />
                    <div className={styles.about}>
                        <h1 className={styles.title}>About Me</h1>
                        <div className={styles.content}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                                {aboutMe?.attributes.Content ?? placeholderContent}
                            </ReactMarkdown>
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
