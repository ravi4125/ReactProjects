import React, { useState } from "react";

const Color = () => {
  const [bg, setbg] = useState("white");

  const changeColor = (event) => {
    const color = event.target.innerText;
    setbg(color);
    document.body.style.backgroundColor = color;
  };

  //   const gradientColor = () => {
  //     const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  //     const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  //     const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  //     const gradient = `linear-gradient(to right, #${randomColor1}, #${randomColor2}, #${randomColor3})`;
  //     document.body.style.background = gradient;
  //   };

  const gradients = [
    "linear-gradient(to right, red, yellow)",
    "linear-gradient(to right, blue, pink)",
    "linear-gradient(to right, purple, cyan)",
    "linear-gradient(45deg, orange, white)",
    "linear-gradient(to bottom, green, lightgreen)",
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a18cd1, #fbc2eb)",
  ];

  const changeRandomGradient = () => {
    const random = Math.floor(Math.random() * gradients.length);
    setbg(gradients[random]);
    document.body.style.background = gradients[random];
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click to Change Background</h2>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Red
      </button>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Green
      </button>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Blue
      </button>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "purple",
          color: "white",
        }}
      >
        Purple
      </button>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "yellow",
          color: "black",
        }}
      >
        Yellow
      </button>
      <button
        onClick={changeColor}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        White
      </button>
      <button
        onClick={changeRandomGradient}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Random
      </button>
    </div>
  );
};

export default Color;
