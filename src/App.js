import "./styles.css";
import React, { useState } from "react";

export default function Hello() {
  const [toggle, setToggle] = useState(false);
  let finalComponent;
  if (toggle) {
    finalComponent = <ClickMeClass msg="click me!!" />;
  } else {
    finalComponent = <ClickMe />;
  }
  return (
    <div className="App">
      <h1>Conditional Rendering Using if else:</h1>
      {finalComponent}
      <button onClick={() => setToggle(!toggle)}>Switch b/w Component</button>
    </div>
  );
}

const ClickMe = () => {
  const onClickHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button id="dfghhj" onClick={onClickHandler}>
        ClickMe
      </button>
      <input id="input" onChange={onClickHandler} />
    </div>
  );
};

class ClickMeClass extends React.Component {
  onClickHandler = (e) => {
    console.log(this);
    console.log(this.props);
    console.log(this.props.msg);
  };
  render() {
    return (
      <div>
        <button id="dfghhj" onClick={this.onClickHandler}>
          ClickMeClass
        </button>
        <input id="input" onChange={this.onClickHandler} />
      </div>
    );
  }
}
