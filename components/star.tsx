import { useCallback } from "react";
import { animated, easings, useSpring } from "react-spring";
import { star } from "./vectors";

type StarProps = {
    windowWidth: number;
    cullUnderWindowWidth?: number;
    top?: string;
    left?: string;
    width?: string;
    haloScale?: number;
    duration?: number;
    color?: string;
    bobLength?: number;
    bobDuration?: number;
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
        color = "rgb(234,222,86)",
        bobLength = 20,
        bobDuration = 2500
    } = props;

    const translate = -100 * haloScale + 150;
    const haloSpring = useSpring({
        loop: true,
        from: { transform: "translate(60, 60) scale(0.9)" },
        to: [
            {
                transform: `translate(${translate}, ${translate}) scale(${haloScale})`
            },
            { transform: "translate(60, 60) scale(0.9)" }
        ],
        config: {
            duration
        }
    });

    const bobSpring = useSpring({
        loop: true,
        from: { top: `calc(${top} + 0px)` },
        to: [
            {
                top: `calc(${top} + ${bobLength}px)`
            },
            { top: `calc(${top} + 0px)` }
        ],
        config: {
            duration: bobDuration,
            easing: easings.easeInOutSine
        }
    });

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
                top: bobSpring.top,
                left,
                width,
                zIndex: -10,
                rotateZ: twirlZSpring.rotateZ,
                rotateY: twirlYSpring.rotateY,
                cursor: "pointer"
            }}
            onClick={() => {
                console.log("clicked");
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
                <animated.g transform={haloSpring.transform}>
                    <animated.path
                        d={star.path}
                        fill={color}
                        filter="url(#starHalo)"
                    />
                </animated.g>
                <g transform="translate(50, 50)">{star.shape}</g>
            </svg>
        </animated.div>
    );
}
