import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import qs from "qs";
import { Parallax } from "@react-spring/parallax";
import Hero from "../components/hero";
import { useEffect, useState } from "react";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Image from "next/image";
import { Post } from "../types/Post";
import { Project } from "../types/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AboutMe } from "../types/AboutMe";
import { Hero as HeroType } from "../types/Hero";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
    props
) => {
    const { projects, aboutMe, hero } = props;
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Devwulf Codes</title>
                <meta
                    name="description"
                    content="Portfolio by Devwulf – Front-end developer crafting modern, responsive, and user-focused web applications."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Parallax
                key={`parallax-${windowWidth <= 1200 ? "lean" : "normal"}`}
                pages={windowWidth <= 1200 ? 5 : 4}
                innerStyle={{
                    backgroundImage: "url(/starfield.png)",
                    backgroundAttachment: "scroll"
                }}
            >
                <Hero windowWidth={windowWidth}
                    hero={hero} />
                <Projects
                    windowWidth={windowWidth}
                    offset={1}
                    projects={projects}
                />
                <About
                    windowWidth={windowWidth}
                    offset={windowWidth <= 1200 ? 3 : 2}
                    aboutMe={aboutMe}
                />
                <Contact
                    windowWidth={windowWidth}
                    offset={windowWidth <= 1200 ? 4 : 3}
                />
            </Parallax>

            <div
                style={{
                    position: "absolute"
                }}
            >
                <ToastContainer />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<{
    projects: Project[];
    aboutMe?: AboutMe;
    hero?: HeroType;
}> = async (context) => {
    const query = qs.stringify(
        {
            populate: "author"
        },
        {
            encodeValuesOnly: true
        }
    );

    const apiKey = process.env.STRAPI_API;
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    if (apiKey == null || apiUrl == null)
        return {
            props: {
                posts: [],
                projects: []
            }
        };

    const requestInit = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    };

    const projectsRes = await fetch(`${apiUrl}/api/portfolio-projects?populate=*&sort=id`);
    const projectsJson = await projectsRes.json();
    const projects: Project[] = projectsJson["data"] ?? [];

    const aboutMeRes = await fetch(`${apiUrl}/api/portfolio-about-me`);
    const aboutMeJson = await aboutMeRes.json();
    const aboutMe: AboutMe | undefined = aboutMeJson["data"] ?? undefined;

    const heroRes = await fetch(`${apiUrl}/api/portfolio-hero`);
    const heroJson = await heroRes.json();
    const hero: HeroType | undefined = heroJson["data"] ?? undefined;

    return {
        props: {
            projects,
            aboutMe,
            hero
        }
    };
};

export default Home;
