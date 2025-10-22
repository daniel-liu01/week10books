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
            <InfoModal
                imgsrc='/industrial.svg'
                type='badge'
                title='You’ve got a new badge!'
                description='You completed your apprenticeship and unlocked a new badge. It will be visible on your profile.'
            />
            <InfoModal type='salary' />
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
