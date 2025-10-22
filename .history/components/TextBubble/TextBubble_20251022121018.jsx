import styles from "./TextBubble.module.css";

function export default TextBubble({ textType, textColor }) {
    return (
        <>
        <div className={styles.container}>
            <p className ={styles.text}>Hello, this is </p>
        </div>
        </>
    )
}