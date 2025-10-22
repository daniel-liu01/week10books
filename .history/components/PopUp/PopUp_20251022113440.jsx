import Card from "../../components/Card/Card";

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
                image='Eletrician.svg'
                type='button'
                valueOfButton='Get Certified'
                typeOfButton='primary'
                sizeOfButton='large'
            />
        </div>
    );
}

export default PopUp;
