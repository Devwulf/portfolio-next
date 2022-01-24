import styles from "../styles/Star.module.css";

type BobProps = {
    children?: React.ReactNode;
};

export function BobSmall(props: BobProps): JSX.Element {
    const { children } = props;
    return (
        <div className={styles.bobContainer}>
            <div className={styles.bobSmall}>{children}</div>
        </div>
    );
}

export function BobMedium(props: BobProps): JSX.Element {
    const { children } = props;
    return (
        <div className={styles.bobContainer}>
            <div className={styles.bobMedium}>{children}</div>
        </div>
    );
}

export function BobLarge(props: BobProps): JSX.Element {
    const { children } = props;
    return (
        <div className={styles.bobContainer}>
            <div className={styles.bobLarge}>{children}</div>
        </div>
    );
}
