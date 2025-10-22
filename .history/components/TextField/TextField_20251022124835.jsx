import styles from "./TextField.module.css";

function TextField() {
    return (
        <div className={styles.textfield}>
            <input
                type='text'
                className={styles.input}
                placeholder='Write you message here:'></input>
            <image
                src='send.svg'
                alt='send icon'
                className={styles.icon}
            />
        </div>
    );
}

export default TextField;
