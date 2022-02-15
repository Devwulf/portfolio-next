import React from "react";
import { astronaut } from "./vectors";

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
            viewBox={astronaut.viewBox}
        >
            <g name="right-arm">
                {astronaut.rightArmUpper}
                {astronaut.rightForearm}
            </g>
            <g name="right-leg">
                {astronaut.rightFoot}
                {astronaut.rightLeg}
            </g>
            {astronaut.torso}
            {astronaut.head}
            <g name="left-leg">
                {astronaut.leftFoot}
                {astronaut.leftLeg}
            </g>
            <g name="left-arm">
                {astronaut.leftHand}
                {astronaut.leftArm}
            </g>
        </svg>
    );
}
