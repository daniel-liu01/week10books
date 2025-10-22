import styles from "./InfoModal.module.css";

function InfoModal({ type, imgsrc }) {
    return;
    {
        type === "badge" && (
            <div className={styles.container}>
                <img
                    src='/'
                    alt='/'
                />
            </div>
        );
    }
    {
        type === "income" && <div></div>;
    }
}

export default InfoModal;
