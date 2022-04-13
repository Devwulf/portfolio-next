import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/ProjectCard.module.css";

type ProjectCardProps = {
    title?: string;
    subtitle?: string;
    projectUrl?: string;
    iconUrl?: string;
    imageUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    const { title, subtitle, projectUrl = "https://google.com", iconUrl, imageUrl } = props;
    const router = useRouter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className={styles.container}
                tabIndex={0}>
                {iconUrl && (
                    <div className={styles.icon}>
                        <Image 
                            src={iconUrl}
                            alt={`${title} icon`}
                            width="64rem"
                            height="64rem"
                            objectFit="cover" />
                    </div>
                )}
                <a className={styles.innerContainer}
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {imageUrl && (
                        <div className={styles.image}>
                            <Image
                                src={imageUrl}
                                alt={`${title} Image`}
                                width="100%"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    )}
                    <div className={styles.titleBg}></div>
                    <div className={styles.textContainer}>
                        {title && (
                            <div className={styles.title}>
                                <svg
                                    width="100%"
                                    height="50%"
                                    viewBox="0 0 200 20"
                                    preserveAspectRatio="xMinYMid meet"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <text x={0} y={15}>
                                        {title}
                                    </text>
                                </svg>
                            </div>
                        )}
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                </a>
            </div>
            <h2 className={styles.name}>{title}</h2>
        </div>
    );
}
