import styles from "./InfoModal.module.css";

function InfoModal({ type }) {
    return;
    {
        type === "badge" && (
            <div className={styles.container}>
                <img src='/' />
            </div>
        );
    }
    {
        type === "income" && <div></div>;
    }
}

export default InfoModal;
