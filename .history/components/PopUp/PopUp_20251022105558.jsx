import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button.jsx";

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
        </div>
    );
}

export default PopUp;
