import styles from "./TextField.module.css";

function TextField() {
    return (
        <div className={styles.textfield}>
            <input
                type='text'
                className={styles.input}
                placeholder='Write you message'></input>
            <button className={styles.sendButton}>
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <mask
                        id='mask0_739_339'
                        style={{ maskType: "alpha" }}
                        maskUnits='userSpaceOnUse'
                        x='0'
                        y='0'
                        width='24'
                        height='24'>
                        <rect
                            width='24'
                            height='24'
                            fill='#D9D9D9'
                        />
                    </mask>
                    <g mask='url(#mask0_739_339)'>
                        <path
                            d='M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z'
                            fill='#58CC02'
                        />
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default TextField;
