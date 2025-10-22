import styles from "./SimulationChat.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import PopUp from "../../components/PopUp/PopUp";
import NarrativeBox from "../../components/NarrativeBox/NarrativeBox";
import Menu from "../../components/Menu/Menu";

function SimulationChat() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <HeadingBar />
            <PopUp />
            <NarrativeBox />
            <Menu />
        </div>
    );
}

export default SimulationChat;
