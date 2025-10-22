import PopUp from "../../components/PopUp/PopUp";
import styles from "./SimulationChat.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";

function SimulationChat() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <HeadingBar />
            <PopUp />
            <Menu />
        </div>
    );
}

export default SimulationChat;
