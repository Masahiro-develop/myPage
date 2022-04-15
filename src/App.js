import './App.css';
import Portfolio from './components/Portfolio';
import SelfIntroduction from './components/SelfIntroduction';
import Top from './components/Top';

export default function App() {
  return (
      <div>
          <Top />
          <hr/>
          <SelfIntroduction />
          <hr/>
          <Portfolio />
      </div>
  );
};