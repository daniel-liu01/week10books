import styles from "./Simulation.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import InfoModal from "../../components/InfoModal/InfoModal";

function Simulation() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <InfoModal
                type='badge'
                title='Some title'
                description='some description goes here'
            />
            <HeadingBar />
            <Card
                image='Anna.png'
                title='Hi, my name is Anna!'
                description={
                    <>
                        Let’s understand everything <br />
                        about careers in trades by simulating it.
                    </>
                }
            />
            <Button
                type='primary'
                size='large'
                value='Start Simulation'
                onClick={() => console.log("clicked")}
                isDisabled={false}
            />
            <Menu />
        </div>
    );
}

export default Simulation;
