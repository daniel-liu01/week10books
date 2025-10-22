import styles from "./InfoModal.module.css";

function InfoModal({ type, imgsrc, header, description }) {
    return;
    {
        type === "badge" && (
            <div className={styles.container}>
                <img
                    src={imgsrc}
                    alt='/'
                />
                <div>
                    <h1>{header}</h1>
                </div>
            </div>
        );
    }
    {
        type === "income" && <div></div>;
    }
}

export default InfoModal;
