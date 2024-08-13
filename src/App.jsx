import "./App.css";
import Accordion from "./Component/Accordion";

function App() {
  return (
    <div
      style={{
        fontSize: "2rem",
        padding: 30,
      }}
    >
      <Accordion
        title="This is a Title"
        Content="This is a Content"
      ></Accordion>
    </div>
  );
}

export default App;
