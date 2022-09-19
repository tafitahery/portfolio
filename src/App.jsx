import Topbar from './component/topbar/Topbar';
import Intro from './component/intro/Intro';
import Portfolio from './component/portfolio/Porfolio';
import Works from './component/work/Works';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
