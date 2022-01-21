import { animated, SpringRef, useSpring, useSpringRef } from "react-spring";
import {
    cloud1,
    cloud2,
    cloud3,
    moon,
    moonShade1,
    moonShade2
} from "./vectors";

type MoonProps = {
    top?: string;
    width?: string;
    shade: "small" | "large";
    windowWidth: number;
};

export default function Moon(props: MoonProps): JSX.Element {
    const { top = "32rem", width = "15rem", shade, windowWidth } = props;
    console.log(windowWidth);
    const spring = useSpring({
        loop: true,
        from:
            shade === "small"
                ? { left: "250vw", top }
                : { left: "-250vw", top },
        to: shade === "small" ? { left: "-50vw", top } : { left: "850vw", top },
        config: {
            duration: 16 * windowWidth + 7200
        }
    });
    const spring4 = useSpring({
        loop: true,
        to: [{ r: 375 }, { r: 372 }, { r: 377 }, { r: 370 }, { r: 375 }],
        from: { r: 375 },
        config: {
            mass: 5,
            tension: 1,
            friction: 1,
            clamp: true,
            precision: 0.001,
            velocity: 0.002
        }
    });

    return (
        <animated.svg
            style={{
                position: "absolute",
                top: spring.top,
                left: spring.left,
                width,
                zIndex: -10
            }}
            viewBox="0 0 1000 1000"
        >
            <defs>
                <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={15} />
                </filter>
            </defs>
            <animated.circle
                cx={500}
                cy={500}
                r={spring4.r}
                fill="#FFFFFF"
                filter="url(#halo)"
            />
            <g transform="translate(125, 125) scale(0.75)">
                {moon.shape}
                {shade === "small" ? moonShade1.shape : moonShade2.shape}
            </g>
        </animated.svg>
    );
}
