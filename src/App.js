import "./App.css";
import { useState } from "react";

function App() {
  const [results, setResults] = useState("Your relationship result here");

  const love = () => {
    const name1 = document.querySelector(".firstName").value;
    const name2 = document.querySelector(".secondName").value;
    if (name1.length <= 1 || name2.length <= 1) {
      alert("Enter at least 2 character");
    } else if (
      (name1 === "leen" && name2 === "moe") ||
      (name1 === "moe" && name2 === "leen")
    ) {
      setResults(name1 + " and " + name2 + " = " + 100 + "%" + " of love ❤️");
    } else {
      const nameLength1 = name1.length;
      const nameLength2 = name2.length;

      const results = Math.floor(
        (Math.min(nameLength1, nameLength2) /
          Math.max(nameLength1, nameLength2)) *
          100
      );

      setResults(name1 + " and " + name2 + " = " + results + "%");
    }
  };

  return (
    <div className="container">
      <h2>❥Love Calculator</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Your Name"
          className="firstName"></input>
        <input
          type="text"
          placeholder="Your Lover"
          className="secondName"></input>
        <button onClick={love}>Calculate</button>
      </div>
      <p className="result">{results}</p>
    </div>
  );
}

export default App;
