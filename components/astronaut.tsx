import React from "react";
import { astronaut } from "./vectors";
import styles from "../styles/Astronaut.module.css";

type AstronautProps = {
    height?: string;
};

export default function Astronaut(props: AstronautProps): JSX.Element {
    const { height = "15rem" } = props;

    return (
        <svg
            style={{
                height
            }}
            viewBox="-10 -10 186 251"
        >
            <g className={styles.astronaut}>
                <g name="right-arm" className={styles.rightArmUpper}>
                    {astronaut.rightArmUpper}
                    <g className={styles.rightForearm}>
                        {astronaut.rightForearm}
                    </g>
                </g>
                <g name="right-leg" className={styles.rightLeg}>
                    <g className={styles.rightFoot}>{astronaut.rightFoot}</g>
                    {astronaut.rightLeg}
                </g>
                {astronaut.torso}
                <g className={styles.head}>{astronaut.head}</g>
                <g name="left-leg" className={styles.leftLeg}>
                    <g className={styles.leftFoot}>{astronaut.leftFoot}</g>
                    {astronaut.leftLeg}
                </g>
                <g name="left-arm" className={styles.leftArm}>
                    {astronaut.leftHand}
                    {astronaut.leftArm}
                </g>
            </g>
        </svg>
    );
}
