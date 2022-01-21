import { animated, useSpring } from "react-spring";
import { cloud1, cloud2, cloud3, earth } from "./vectors";

type EarthProps = {
    top?: string;
    left?: string;
    width?: string;
};

export default function Earth(props: EarthProps): JSX.Element {
    const { top = "32rem", left = "48rem", width = "15rem" } = props;
    const spring1 = useSpring({
        loop: true,
        to: { x: 400, y: 80 },
        from: { x: -200, y: 80 },
        config: {
            mass: 20,
            tension: 1,
            friction: 1,
            clamp: true,
            precision: 0.001,
            velocity: 0.002
        }
    });

    const spring2 = useSpring({
        loop: true,
        to: { x: 400, y: 200 },
        from: { x: -200, y: 200 },
        config: {
            mass: 10,
            tension: 1,
            friction: 1,
            clamp: true,
            precision: 0.001,
            velocity: 0.002
        }
    });

    const spring3 = useSpring({
        loop: true,
        to: { x: 400, y: 250 },
        from: { x: -200, y: 250 },
        config: {
            mass: 30,
            tension: 1,
            friction: 1,
            clamp: true,
            precision: 0.001,
            velocity: 0.002
        }
    });

    const spring4 = useSpring({
        loop: true,
        to: [{ r: 145 }, { r: 142 }, { r: 147 }, { r: 140 }, { r: 145 }],
        from: { r: 145 },
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
        <svg
            style={{
                position: "absolute",
                top,
                left,
                width,
                zIndex: -10
            }}
            viewBox="0 0 400 400"
        >
            <defs>
                <clipPath id="cloudClip">
                    <circle cx={200} cy={200} r={150} />
                </clipPath>
                <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={15} />
                </filter>
            </defs>
            <animated.circle
                cx={200}
                cy={200}
                r={spring4.r}
                fill="#FFFFFF"
                filter="url(#halo)"
            />
            <g transform="translate(50, 50) scale(0.75)">{earth.shape}</g>
            <g clipPath="url(#cloudClip)">
                <animated.g style={{ x: spring1.x, y: spring1.y }}>
                    {cloud1.shape}
                </animated.g>
                <animated.g style={{ x: spring2.x, y: spring2.y }}>
                    {cloud2.shape}
                </animated.g>
                <animated.g style={{ x: spring3.x, y: spring3.y }}>
                    {cloud3.shape}
                </animated.g>
            </g>
        </svg>
    );
}
