import Card from "../../components/Card/Card";
import Button from "../../compponents/Button/Button";

function PopUp() {
    return (
        <div>
            <Card
                title='Certificate of Qualification (C of Q) exam.'
                description={
                    <>
                        You completed your apprenticeship and unlocked
                        <br />a new badge. It will be visible on your profile.
                        about careers in trades by simulating it.
                    </>
                }
                image='/'
            />

            <Button
                type='primary'
                size='large'
                value='Start Simulation'
                onClick={() => console.log("clicked")}
                isDisabled={false}
            />
        </div>
    );
}

export default PopUp;
