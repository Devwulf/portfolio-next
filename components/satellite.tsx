import { satellite } from "./vectors";
import styles from "../styles/Satellite.module.css";

type SatelliteProps = {
    width?: string;
};

export default function Satellite(props: SatelliteProps): JSX.Element {
    const { width = "15rem" } = props;

    return (
        <svg
            style={{
                width,
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
