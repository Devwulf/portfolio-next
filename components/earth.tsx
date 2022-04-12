import { cloud1, cloud2, cloud3, earth } from "./vectors";
import styles from "../styles/Earth.module.css";
import { animated, SpringValue } from "react-spring";

type EarthProps = {
    top?: string;
    left?: string;
    width?: string;

    ping1R?: SpringValue<number>;
    ping1O?: SpringValue<number>;
    ping2R?: SpringValue<number>;
    ping2O?: SpringValue<number>;
    ping3R?: SpringValue<number>;
    ping3O?: SpringValue<number>;
    ping4R?: SpringValue<number>;
    ping4O?: SpringValue<number>;
};

export default function Earth(props: EarthProps): JSX.Element {
    const { top = "32rem", left = "48rem", width = "15rem", 
        ping1R, ping1O, 
        ping2R, ping2O, 
        ping3R, ping3O,
        ping4R, ping4O
    } = props;
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
            <circle
                className={styles.halo}
                cx={200}
                cy={200}
                fill="#FFFFFF"
                filter="url(#halo)"
            />
            <g transform="translate(50, 50) scale(0.75)">{earth.shape}</g>
            <g clipPath="url(#cloudClip)">
                <g className={styles.cloudMedium}>
                    <g className={styles.cloudMediumY}>{cloud1.shape}</g>
                </g>
                <g className={styles.cloudSmall}>
                    <g className={styles.cloudSmallY}>{cloud2.shape}</g>
                </g>
                <g className={styles.cloudLarge}>
                    <g className={styles.cloudLargeY}>{cloud3.shape}</g>
                </g>
            </g>
            
            <animated.circle
                cx="30%"
                cy="40%"
                r={ping1R}
                opacity={ping1O}
                stroke="#eeeeee"
                strokeWidth={2}
                fill="transparent" />

            <animated.circle
                cx="50%"
                cy="30%"
                r={ping2R}
                opacity={ping2O}
                stroke="#eeeeee"
                strokeWidth={2}
                fill="transparent" />

            <animated.circle
                cx="60%"
                cy="70%"
                r={ping3R}
                opacity={ping3O}
                stroke="#eeeeee"
                strokeWidth={2}
                fill="transparent" />

            <animated.circle
                cx="80%"
                cy="45%"
                r={ping4R}
                opacity={ping4O}
                stroke="#eeeeee"
                strokeWidth={2}
                fill="transparent" />
        </svg>
    );
}
