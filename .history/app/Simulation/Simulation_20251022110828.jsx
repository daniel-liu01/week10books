import styles from "./Simulation.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import Anna from "../../assets/Anna.svg";

function Simulation() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <HeadingBar />
            <Card
                image={Anna}
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
