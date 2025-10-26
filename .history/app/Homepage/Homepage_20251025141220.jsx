homepage.jsx;
import styles from "./Homepage.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";

function Homepage() {
    return (
        <div className={styles.container}>
            <StatusBar />
            <div className={styles.header}>
                <h2 className={styles.username}>Hello, Brandon!</h2>
                <h1 className={styles.title}>Ready to dive in?</h1>
            </div>
            {/* <TabMenu /> */}

            <div className={styles.career_sim}>
                <h3 className={styles.card_title}>
                    Simulate a career in trade
                </h3>
                <Card
                    type='button'
                    title=''
                    description=''
                    image='/AnnaSpeach.svg'
                    valueOfButton='Start simulating'
                    typeOfButton='primary'
                    sizeOfButton='large'
                />
            </div>

            <div className={styles.my_path}>
                <div className={styles.card_header}>
                    <h3 className={styles.card_title}>My Pathways</h3>
                    {/* <SeeAll /> */}
                </div>
                <div className={styles.path_buttons}>
                    {/* <AddButton /> */}
                    <div className={styles.path_careers}>
                        {/* <CareerCard/> */}
                        {/* <CareerCard/> */}
                    </div>
                </div>
            </div>
            <div className={styles.explore}>
                <div className={styles.card_header}>
                    <h3 className={styles.card_title}>Explore new careers</h3>
                    {/* <SeeAll /> */}
                </div>
                <div className={styles.explore_map}>{/* <Map/> */}</div>
            </div>
            <Menu />
        </div>
    );
}

export default Homepage;
