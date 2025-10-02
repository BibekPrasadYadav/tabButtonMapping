import "./styles.css";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const tabs = [{ name: "tab1" }, { name: "tab2" }, { name: "tab3" }];
  const [selectedTabBtn, setSelectedTabBtn] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const tabClick = (e) => {
    setActiveTab(e.target.name);
  };

  return (
    <div className="App">
      {tabs.map((tab) => (
        <button name={tab?.name} onClick={tabClick}>
          {tab?.name}
        </button>
      ))}
      <Child tab={activeTab} setSelectedTabBtn={setSelectedTabBtn} />
      {Object.entries(selectedTabBtn).map(([tab, btn]) => (
        <>
          {tab} : <div>{btn}</div>
        </>
      ))}
    </div>
  );
}
