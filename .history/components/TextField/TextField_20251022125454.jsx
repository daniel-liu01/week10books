import styles from "./TextField.module.css";

function TextField() {
    return (
        <div className={styles.textfield}>
            <input
                type='text'
                className={styles.input}
                placeholder='Write you message here:'></input>
        </div>
    );
}

export default TextField;
