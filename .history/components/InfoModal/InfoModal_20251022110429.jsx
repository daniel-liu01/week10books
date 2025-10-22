import styles from "./InfoModal.module.css";

function InfoModal({ type, imgsrc, title, description }) {
    return (
        <>
            {type === "badge" && (
                <div className={styles.container}>
                    <img
                        src={imgsrc}
                        alt='/'
                    />
                    <div className={styles.text_container}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoModal;
