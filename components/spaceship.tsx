import { animated } from "react-spring";
import { spaceShip } from "./vectors";
import styles from "../styles/Spaceship.module.css";

type SpaceshipProps = {
    width?: string;
};

export default function Spaceship(props: SpaceshipProps): JSX.Element {
    const { width = "15rem" } = props;

    return (
        <svg
            style={{
                width,
                zIndex: -10
            }}
            viewBox="-55 -179 165 716"
        >
            <g className={styles.spaceshipContainer}>
                <g className={styles.spaceship}>
                    {spaceShip.shape}
                    <g>
                        <g className={styles.fireSmall}>
                            {spaceShip.fireSmall1Shape}
                            {spaceShip.fireSmall2Shape}
                        </g>
                        <g className={styles.fireLarge}>
                            {spaceShip.fireLargeShape}
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}
