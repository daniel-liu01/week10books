import styles from "./TextField.module.css";

function TextField() {
    return (
        <div className='textfield'>
            <input
                type='text'
                className='text'
                placeholder='Write you message here:'></input>
        </div>
    );
}

export default TextField;
