import styles from "./ArrowBack.module.css";
import { useNavigate } from "react-router-dom";

function ArrowBack() {
    const navigate = useNavigate();

    return (
        <button
            type='button'
            className={styles.arrow_container}
            onClick={() => navigate(-1)}
            aria-label='Go back'>
            <svg
                className={styles.arrow_icon}
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'>
                <path
                    d='M3.4 9.075... (seu d aqui) ...'
                    fill='currentColor'
                />
            </svg>
        </button>
    );
}

export default ArrowBack;
