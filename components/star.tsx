import { animated, easings, useSpring } from "react-spring";
import { star } from "./vectors";
import styles from "../styles/Star.module.css";

type StarProps = {
    windowWidth: number;
    cullUnderWindowWidth?: number;
    top?: string;
    left?: string;
    width?: string;
    haloScale?: number;
    duration?: number;
    color?: string;
};

export default function Star(props: StarProps): JSX.Element | null {
    const {
        windowWidth,
        cullUnderWindowWidth = undefined,
        top = "32rem",
        left = "48rem",
        width = "15rem",
        haloScale = 1.25,
        duration = 5000,
        color = "rgb(234,222,86)"
    } = props;

    const twirlZSpring = useSpring({
        rotateZ: "0deg",
        config: {
            duration: 1000,
            easing: easings.easeInOutCubic
        }
    });

    const twirlYSpring = useSpring({
        rotateY: "0deg",
        config: {
            duration: 1000,
            easing: easings.easeInOutCubic
        }
    });

    if (cullUnderWindowWidth && windowWidth < cullUnderWindowWidth) return null;

    return (
        <animated.div
            style={{
                position: "absolute",
                top,
                left,
                width,
                zIndex: -10,
                rotateZ: twirlZSpring.rotateZ,
                rotateY: twirlYSpring.rotateY,
                cursor: "pointer",
                pointerEvents: "all"
            }}
            onClick={() => {
                const rand = Math.random();
                if (rand > 0.5)
                    twirlZSpring.rotateZ.start({
                        from: "0deg",
                        to: "360deg"
                    });
                else
                    twirlYSpring.rotateY.start({
                        from: "0deg",
                        to: "360deg"
                    });
            }}
        >
            <svg
                style={{
                    fill: color
                }}
                viewBox="0 0 300 300"
            >
                <defs>
                    <filter
                        id="starHalo"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur in="SourceGraphic" stdDeviation={20} />
                    </filter>
                </defs>
                <g className={styles.halo}>
                    <animated.path
                        d={star.path}
                        fill={color}
                        filter="url(#starHalo)"
                    />
                </g>
                <g transform="translate(50, 50)">{star.shape}</g>
            </svg>
        </animated.div>
    );
}
