import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

type ProjectCardProps = {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    const { title, subtitle, imageUrl } = props;
    return (
        <div className={styles.container}>
            {imageUrl && (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "50%"
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt={`${title} Image`}
                        width="100%"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                {title && <h1>{title}</h1>}
                {subtitle && <p>{subtitle}</p>}
            </div>
        </div>
    );
}
