import styles from "./HeadingBar.module.css";
import ArrowBack from "../ArrowBack/ArrowBack";

function HeadingBar() {
    return (
        <div className={styles.heading_container}>
            <ArrowBack />
            <h1 className={styles.heading_pageTitle}>Career Simulation</h1>
            <ArrowBack />
        </div>
    );
}

export default HeadingBar;
