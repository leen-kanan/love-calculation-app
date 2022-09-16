import logo from "./logo.svg";
import "./App.css";

function App() {
  function love() {
    const name1 = document.querySelector(".firstName").value;
    const name2 = document.querySelector(".secondName").value;
    if (name1.length <= 2) {
      alert("Enter at least 3 character");
    } else if (name1 === "leen" && name2 === "moe") {
      document.querySelector(".result").innerHTML =
        name1 + " and " + name2 + " = " + 100 + "%" + " of love ❤️";
    } else {
      let random = Math.floor(Math.random() * 100);
      document.querySelector(".result").innerHTML =
        name1 + " " + "and " + name2 + " = " + random + "%" + " of love";
    }
    const form = document.querySelector(".inputs");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);
  }

  return (
    <div className="container">
      <h2>❥Love Calculator</h2>
      <form className="inputs">
        <input
          type="text"
          placeholder="Your Name"
          className="firstName"></input>
        <input
          type="text"
          placeholder="Your Lover"
          className="secondName"></input>
        <button onClick={love}>Calculate</button>
      </form>
      <p className="result">Your relationship result here</p>
    </div>
  );
}

export default App;
