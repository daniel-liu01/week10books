import { useState, useRef, useEffect } from "react";
import styles from "./TabMenu.module.css";

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState("pathways");
  const tabsRef = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeButton = tabsRef.current[activeTab];
    if (activeButton) {
      setIndicatorStyle({
        width: `${activeButton.offsetWidth}px`,
        left: `${activeButton.offsetLeft}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className={styles.tabMenu}>
      {["pathways", "demand", "jobs"].map((tab) => (
        <button
          key={tab}
          ref={(el) => (tabsRef.current[tab] = el)}
          className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === "pathways" ? "Your Pathways" : tab === "demand" ? "In Demand" : "Job Opportunities"}
        </button>
      ))}
      <span className={styles.indicator} style={indicatorStyle}></span>
    </div>
  );
}
