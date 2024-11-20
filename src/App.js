import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WebShop from "./img/webshop1.PNG";
import CountdownTimer from "./img/CountdownTimer.PNG";
import JavaScriptCalculator from "./img/JavaScriptCalculator.PNG";
import DrumMachine from "./img/DrumMachine.PNG";
import RandomQuoteMachine from "./img/RandomQuoteMachine.PNG";
import TypingSpeedTester from "./img/Typing_speed_app.JPG";

var projectList = [
  {
    id: 0,
    title: "VC-Collections: E-commerce website",
    picture: WebShop,
    url: "https://vc-collections.vercel.app/",
    stack: "React, Node.js, Express, Redux, MongoDB, Stripe API, Ngrok",
  },
  {
    id: 1,
    title: "Typing Speed Tester",
    picture: TypingSpeedTester,
    url: "https://vicano-typing-speed-tester.netlify.app/",
    stack: "HTML, CSS, JS, React, Bootstrap, stripe",
  },
  {
    id: 2,
    title: "Countdown Timer",
    picture: CountdownTimer,
    url: "https://vic-countdown-timer.netlify.app/",
    stack: "HTML, CSS, JS, React, jQuery",
  },
  {
    id: 3,
    title: "Drum Machine",
    picture: DrumMachine,
    url: "https://vic-drum-machine.netlify.app/",
    stack: "HTML, CSS, JS, React",
  },
  {
    id: 4,
    title: "JavaScript Calculator",
    picture: JavaScriptCalculator,
    url: "https://codepen.io/vicano/full/ZExreGd",
    stack: "HTML, CSS, JS, React",
  },
  {
    id: 5,
    title: "Random Quote Machine",
    picture: RandomQuoteMachine,
    url: "https://codepen.io/vicano/full/dydmyeq",
    stack: "HTML, CSS, JS, React",
  },
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects projectList={projectList} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
