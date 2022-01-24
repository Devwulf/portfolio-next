import { cloud1, cloud2, cloud3, earth } from "./vectors";
import styles from "../styles/Earth.module.css";

type EarthProps = {
    top?: string;
    left?: string;
    width?: string;
};

export default function Earth(props: EarthProps): JSX.Element {
    const { top = "32rem", left = "48rem", width = "15rem" } = props;
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
        </svg>
    );
}
