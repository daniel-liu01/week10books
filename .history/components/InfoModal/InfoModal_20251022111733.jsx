import styles from "./InfoModal.module.css";

function InfoModal({ type, imgsrc, title, description }) {
    return (
        <>
            {type === "badge" && (
                <div className={styles.container}>
                    <img
                        className={styles.image}
                        src={imgsrc}
                        alt='/'
                    />
                    <div className={styles.info_container}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoModal;
