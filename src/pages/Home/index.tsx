import { useRef } from "react";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/AboutUs";
import ValuesMissionVision from "../../components/ValuesMissionVision";
import Projects from "../../components/Projects";
import HouseProjects from "../../components/HouseProjects";
import Footer from "../../components/Footer";

export default function Home() {
    const aboutUsRef = useRef(null);
    const projectsRef = useRef(null);
    const houseProjectsRef = useRef(null);
    return (
        <>
            <Header aboutUsRef={aboutUsRef} projectsRef={projectsRef} houseProjectsRef={houseProjectsRef} />
            <HeroBanner projectsRef={projectsRef} />
            <div ref={aboutUsRef}>
                <AboutUs />
            </div>
            <ValuesMissionVision />
            <div ref={houseProjectsRef}>
                <HouseProjects />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <Footer />
        </>
    )
}