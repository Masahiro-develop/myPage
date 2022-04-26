import './App.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import SelfIntroduction from './components/SelfIntroduction';
import Top from './components/Top';

export default function App() {
    return (
        <div>
            <Top />
            <SelfIntroduction />
            <Portfolio />
            <Footer />
        </div>
    );
};