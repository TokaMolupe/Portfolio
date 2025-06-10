import Navbar from '../components/Navbar';
import Main from '../components/Main';
import AnimatedPage from "../components/Animated";
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <AnimatedPage>
                <Navbar />
                <Main />
                <Footer />
            </AnimatedPage>
        </div>
    );
}

export default Home;