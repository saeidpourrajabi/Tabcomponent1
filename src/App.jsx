import { useState } from "react";
import "./App.css";

const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "ITEM OWN Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "ITEM TWO Authorize the user data ❤️",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "ITEM THREE Authorize the user data ⭐",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={() => handleOpen()}>✖️</button>
      {isOpen ? (
        <div className="tab">
          <div className="tab-header">
            {tabData.map((tab) => (
              <button
                onClick={() => handleActiveTab(tab.id)}
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}>
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <p>{tabData[activeTab - 1].content}</p>
          </div>
        </div>
      ) : (
        <p>closed.</p>
      )}
    </div>
  );
}

export default App;
