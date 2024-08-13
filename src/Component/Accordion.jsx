import { useState } from "react";

function Accordion({ title, Content }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div
        style={{
          background: "#666",
          color: "white",

          padding: 10,
          display: "flex",
          fontWeight: "bold",
          fontSize: 30,
          justifyContent: "space-between",
        }}
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        {title}
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div
          style={{
            border: "1px solid #999",
            padding: 20,
            color: "black",
          }}
        >
          {Content}
        </div>
      )}
    </div>
  );
}

export default Accordion;
