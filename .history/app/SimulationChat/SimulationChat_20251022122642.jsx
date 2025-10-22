import styles from "./SimulationChat.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import PopUp from "../../components/PopUp/PopUp";
import NarrativeBox from "../../components/NarrativeBox/NarrativeBox";
import AnnaAvatar from "../../components/AnnaAvatar/AnnaAvatar";
import Menu from "../../components/Menu/Menu";

function SimulationChat() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <HeadingBar />
            <NarrativeBox
                title='Narrative Title Here'
                description='She looked down at her hands, calloused just slightly from the weeks she’d spent tinkering with broken lamps, rewiring outlets in her uncle’s garage, and flipping through thick manuals late at night. Her mind had been circling the idea for a while now, even if she hadn’t said it out loud until this moment.'
            />
            <AnnaAvatar />
            <PopUp />
            <Menu />
        </div>
    );
}

export default SimulationChat;
