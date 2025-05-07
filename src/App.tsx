import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full antialiased ">
        <div className="app-container my-10 ">
          <main className="min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10">
            <Header />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
