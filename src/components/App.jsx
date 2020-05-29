import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function inputEvent() {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const { value, name } = event.target;

    setfullName(prevValue => {
      if (name == "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input onChange={inputEvent} name="fName" placeholder="First Name" />
        {/* //value={fullName.fName}/> */}
        <input onChange={inputEvent} name="lName" placeholder="Last Name" />
        {/* // value={fullName.lName}/> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
