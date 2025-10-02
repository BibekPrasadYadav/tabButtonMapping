import "./styles.css";
import { useState } from "react";

export default function Child({ tab, setSelectedTabBtn }) {
  const buttons = [{ name: "btn1" }, { name: "btn2" }, { name: "btn3" }];

  const mapTabBtn = (tab, btn) => {
    setSelectedTabBtn((prev) => ({
      ...prev,
      [tab]: btn,
    }));
  };
  const btnClick = (e) => {
    mapTabBtn(tab, e.target.name);
  };
  return (
    <div className="App">
      {buttons?.map((button) => (
        <button name={button?.name} onClick={btnClick}>
          {button?.name}
        </button>
      ))}
    </div>
  );
}
