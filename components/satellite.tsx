import { satellite } from "./vectors";
import styles from "../styles/Satellite.module.css";
import { animated, easings, useSpring, useSprings } from "react-spring";

type SatelliteProps = {
    top?: string;
    left?: string;
    width?: string;
};

export default function Satellite(props: SatelliteProps): JSX.Element {
    const { width = "15rem", top = "50%", left = "50%" } = props;
    return (
        <svg
            style={{
                position: "absolute",
                width,
                top,
                left,
                transform: "translate(-50%, -50%)",
                zIndex: -10
            }}
            viewBox="-235.75 -235.75 2357.5 2357.5"
        >
            <g className={styles.satellite}>
                {satellite.shape}
            </g>
        </svg>
    );
}
