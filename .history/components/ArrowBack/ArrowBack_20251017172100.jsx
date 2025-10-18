// ArrowBack.jsx (teste)
function ArrowBack() {
    return (
        <button
            type='button'
            className={styles.arrow_container}
            onClick={() => window.history.back()} // ← usa o history do browser
            aria-label='Go back'>
            <svg
                className={styles.arrow_icon}
                width='16'
                height='16'
                viewBox='0 0 16 16'>
                <path
                    d='M3.4 9.075L8.3 13.975...H3.4Z'
                    fill='currentColor'
                />
            </svg>
        </button>
    );
}
