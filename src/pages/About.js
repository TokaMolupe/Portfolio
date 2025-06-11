import AboutMe from "../components/About"
import Skills from "../components/Skills"
import AnimatedPage from "../components/Animated";

function About() {
    return (
        <div>
            <AnimatedPage>
                <AboutMe />
                <Skills />
            </AnimatedPage>
        </div>
    );
}

export default About;