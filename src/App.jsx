import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import componentImg from "./assets/components.png";

function App() {
  let tabContent = "hello";
  function handleSelect(e) {
    console.log(e);
    if (e.target.innerHTML === "Component") {
      console.log("component");
      tabContent = 'component'
    } else if (e.target.innerHTML === "Props") {
      console.log("props");
    } else if (e.target.innerHTML === "Props") {
      console.log("props");
    } else if (e.target.innerHTML === "Props") {
      console.log("props");
    }
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="Building blocks of the UI"
              image={componentImg}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={handleSelect}>Component</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
            {/* <TabButton name='Component'/>
            <TabButton name='JSX'/>
            <TabButton name='Props'/>
            <TabButton name='State'/> */}
          </menu>
          
        </section>
      </main>
    </div>
  );
}

export default App;
