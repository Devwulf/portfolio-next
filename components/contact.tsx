import { ParallaxLayer } from "@react-spring/parallax";
import { BobSmall, BobMedium, BobLarge } from "./bob";
import Star from "./star";
import styles from "../styles/Contact.module.css";
import Satellite from "./satellite";
import Earth from "./earth";
import { TextAreaField, TextField } from "./input";
import { useEffect, useState } from "react";
import { animated, easings, useSpring, useSprings } from "react-spring";
import { toast, ToastContainer, ToastOptions } from "react-toastify";

type ContactProps = {
    windowWidth: number;
    offset: number;
};

export default function Contact(props: ContactProps): JSX.Element {
    const { windowWidth, offset } = props;
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    
    const settings = {
        from: {
            r: 0, opacity: 0
        },
        config: {
            duration: 2000,
            easing: easings.easeInOutCubic
        }
    };

    const satellitePingMain = useSpring(settings);
    const satellitePing1 = useSpring(settings);
    const satellitePing2 = useSpring(settings);

    const earthPing1 = useSpring(settings);
    const earthPing2 = useSpring(settings);
    const earthPing3 = useSpring(settings);
    const earthPing4 = useSpring(settings);
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
                <Earth top={windowWidth > 800 ? "0%" : "-50%"} left={windowWidth > 800 ? "50%" : "-45%"} width="64rem"
                    ping1R={earthPing1.r}
                    ping1O={earthPing1.opacity}
                    ping2R={earthPing2.r}
                    ping2O={earthPing2.opacity}
                    ping3R={earthPing3.r}
                    ping3O={earthPing3.opacity}
                    ping4R={earthPing4.r}
                    ping4O={earthPing4.opacity} />
                <svg style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -20
                }}>
                </svg>
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
                <div className={styles.container}>
                    <div className={styles.contact}
                        style={{
                            marginTop: windowWidth > 800 ? undefined : "4rem"
                        }}>
                        <h1 className={styles.title}>Contact</h1>
                        
                        <form action="" className={styles.content}
                            onSubmit={async event => {
                                event.preventDefault();
                                
                                const res = await fetch("/api/sendgrid", {
                                    body: JSON.stringify({
                                        name, email, message
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST"
                                });

                                const { error } = await res.json();
                                const toastSettings: ToastOptions<{}> = {
                                    position: "bottom-center",
                                    autoClose: 6000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                };
                                if (error)
                                    toast.error("An error occured when sending your message. Sorry!", toastSettings);
                                else
                                    toast.success("Your message has been successfully sent. Hooray!", toastSettings);
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
                                type="email"
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
                                type="submit"
                                onClick={() => {
                                    satellitePingMain.r.start({
                                        from: 10,
                                        to: 2000,
                                        delay: 200,
                                        reset: true,
                                        onStart: () => {
                                            satellitePingMain.opacity.start({
                                                from: 1,
                                                to: 0,
                                                reset: true
                                            });
                                        }
                                    });

                                    satellitePing1.r.start({
                                        from: 10,
                                        to: 2000,
                                        delay: 700,
                                        reset: true,
                                        onStart: () => {
                                            satellitePing1.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });

                                    satellitePing2.r.start({
                                        from: 10,
                                        to: 3000,
                                        delay: 950,
                                        reset: true,
                                        onStart: () => {
                                            satellitePing2.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });

                                    
                                    earthPing1.r.start({
                                        from: 0,
                                        to: 30,
                                        delay: 1700,
                                        reset: true,
                                        onStart: () => {
                                            earthPing1.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });

                                    earthPing2.r.start({
                                        from: 0,
                                        to: 30,
                                        delay: 2200,
                                        reset: true,
                                        onStart: () => {
                                            earthPing2.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });

                                    earthPing3.r.start({
                                        from: 0,
                                        to: 30,
                                        delay: 2450,
                                        reset: true,
                                        onStart: () => {
                                            earthPing3.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });

                                    earthPing4.r.start({
                                        from: 0,
                                        to: 30,
                                        delay: 2750,
                                        reset: true,
                                        onStart: () => {
                                            earthPing4.opacity.start({
                                                from: 1,
                                                to: 0,
                                                delay: 200,
                                                reset: true
                                            });
                                        }
                                    });
                                }}>
                                Transmit Message
                            </button>
                        </form>
                    </div>
                </div>

                <svg style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -20
                }}>
                    <animated.circle
                        cx={windowWidth > 800 ? "65%" : "50%"}
                        cy={windowWidth > 800 ? "50%" : "33%"}
                        r={satellitePingMain.r}
                        opacity={satellitePingMain.opacity}
                        stroke="#eeeeee"
                        strokeWidth={10}
                        fill="transparent" />

                    <animated.circle
                        cx={windowWidth > 800 ? "65%" : "50%"}
                        cy={windowWidth > 800 ? "50%" : "33%"}
                        r={satellitePing1.r}
                        opacity={satellitePing1.opacity}
                        stroke="#eeeeee"
                        strokeWidth={10}
                        fill="transparent" />

                    <animated.circle
                        cx={windowWidth > 800 ? "65%" : "50%"}
                        cy={windowWidth > 800 ? "50%" : "33%"}
                        r={satellitePing2.r}
                        opacity={satellitePing2.opacity}
                        stroke="#eeeeee"
                        strokeWidth={10}
                        fill="transparent" />
                </svg>
                <Satellite width="28rem" 
                    top={windowWidth > 800 ? "50%" : "33%"}
                    left={windowWidth > 800 ? "65%" : "50%"} />

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