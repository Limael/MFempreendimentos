import { useRef } from "react";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import ValuesMissionVision from "../../components/ValuesMissionVision";
import Projects from "../../components/Projects";
import HouseProjects from "../../components/HouseProjects";
import Footer from "../../components/Footer";

export default function Home() {
    const projectsRef = useRef(null);
    const houseProjectsRef = useRef(null);
    return (
        <>
            <Header projectsRef={projectsRef} houseProjectsRef={houseProjectsRef} />
            <HeroBanner projectsRef={projectsRef} />
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