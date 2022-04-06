import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import Star from "./star";
import styles from "../styles/Contact.module.css";
import Satellite from "./satellite";
import Earth from "./earth";
import { TextAreaField, TextField } from "./input";
import { useState } from "react";

type ContactProps = {
    windowWidth: number;
    offset: number;
};

export default function Contact(props: ContactProps): JSX.Element {
    const { windowWidth, offset } = props;
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    return (
        <>
            <ParallaxLayer
                key={`contact-star1-${offset}`}
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
                key={`contact-star2-${offset}`}
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
                key={`contact-star3-${offset}`}
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
                key={`contact-earth-${offset}`}
                offset={offset}
                speed={0.25}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: windowWidth > 800 ? "4rem" : "0rem",
                    paddingRight: windowWidth > 800 ? "4rem" : "0rem",
                    pointerEvents: "none"
                }}
            >
                <Earth top={windowWidth > 800 ? "0%" : "-50%"} left={windowWidth > 800 ? "50%" : "-25%"} width="64rem" />
            </ParallaxLayer>
            <ParallaxLayer
                key={`contact-content-${offset}`}
                offset={offset}
                speed={0.7}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: windowWidth > 800 ? "4rem" : "0rem",
                    paddingRight: windowWidth > 800 ? "4rem" : "0rem",
                    pointerEvents: "none"
                }}
            >
                <div
                    className=""
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: windowWidth > 800 ? "row" : "column-reverse",
                        justifyContent: windowWidth > 800 ? "start" : "end",
                        alignItems: "center",
                        maxWidth: "72rem",
                        width: "100%",
                        height: "100%",
                        padding: "6rem 0"
                    }}
                >
                    <div className={styles.contact}
                        style={{
                            marginTop: windowWidth > 800 ? undefined : "4rem"
                        }}>
                        <h1 className={styles.title}>Contact</h1>
                        
                        <form action="" className={styles.content}
                            onSubmit={event => {
                                event.preventDefault();
                            }}>
                            <TextField 
                                name="Name"
                                value={name} 
                                onChange={async value => {
                                    setName(value);
                                    return true;
                                }} />
                            <TextField 
                                name="Email"
                                value={email} 
                                onChange={async value => {
                                    setEmail(value);
                                    return true;
                                }} />
                            <TextAreaField 
                                name="Message"
                                maxHeight={windowWidth > 800 ? undefined : "6rem"}
                                value={message} 
                                onChange={async value => {
                                    setMessage(value);
                                    return true;
                                }} />
                            <button className={styles.submit}
                                type="submit">
                                Transmit Message
                            </button>
                        </form>
                    </div>
                    <Satellite width="32rem" />
                </div>
                {/*
                <footer style={{
                    display: "flex",
                    width: "100%",
                    height: "6rem",
                    
                }}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <span className={styles.logo}>
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                width={72}
                                height={16}
                            />
                        </span>
                    </a>
                </footer>
                */}
            </ParallaxLayer>
        </>
    );
}
