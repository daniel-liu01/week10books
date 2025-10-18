import styles from "./Simulation";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";

function Simulation() {
    return (
        <div>
            <HeadingBar />
            <Card
                image='/assets/example.jpg'
                title='Career Simulation'
                description='Practice real-world scenarios and grow your skills.'
                onPrimaryClick={() => console.log("Start")}
                onSecondaryClick={() => console.log("More Info")}
            />
        </div>
    );
}

export default Simulation;
