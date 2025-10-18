import styles from "./Simulation.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

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
        </div>
    );
}

export default Simulation;
