import styles from "./TabMenu.module.css";
import { useState } from "react";

export default function TabMenu() {
  const [activeTab, setActiveTab] = useState("pathways");

  return (
    <div className={styles.tabMenu}>
      <button
        className={`${styles.tab} ${activeTab === "pathways" ? styles.activeTab : ""}`}
        onClick={() => setActiveTab("pathways")}
      >
        Your Pathways
      </button>

      <button
        className={`${styles.tab} ${activeTab === "demand" ? styles.activeTab : ""}`}
        onClick={() => setActiveTab("demand")}
      >
        In Demand
      </button>

      <button
        className={`${styles.tab} ${activeTab === "jobs" ? styles.activeTab : ""}`}
        onClick={() => setActiveTab("jobs")}
      >
        Job Opportunities
      </button>
    </div>
  );
}