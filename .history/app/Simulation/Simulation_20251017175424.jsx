import styles from "./Simulation";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";

function Simulation() {
    return (
        <div>
            <HeadingBar />
            <Card
                image='Character.png'
                title='Hi, my name is Anna!'
                description='Let’s understand everything 
about careers in trades by simulating it.'
                onPrimaryClick={() => console.log("Start")}
                onSecondaryClick={() => console.log("More Info")}
            />
        </div>
    );
}

export default Simulation;
