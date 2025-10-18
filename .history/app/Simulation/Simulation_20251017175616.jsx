import styles from "./Simulation";
import HeadingBar from "../../components/HeadingBar/HeadingBar";
import Card from "../../components/Card/Card";
import Anna from "../../assets/Anna.png";

function Simulation() {
    return (
        <div>
            <HeadingBar />
            <Card
                image={image}
                title='Hi, my name is Anna!'
                description='Let’s understand everything 
about careers in trades by simulating it.'
            />
        </div>
    );
}

export default Simulation;
