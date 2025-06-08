import Navbar from '../components/Navbar';
import Main from '../components/Main';
import AnimatedPage from "../components/Animated";

function Home() {
    return (
        <div>
            <AnimatedPage>
                <Navbar />
                <Main />
            </AnimatedPage>
        </div>
    );
}

export default Home;