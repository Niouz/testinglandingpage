import styles from "../styles/Footer.module.css";

const NewFooter = ( {logo, appStore, playStore, facebook, twitter, instagram} ) => {

    return(
        
        <footer className={styles.container}>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
                <p>Democratizing news for all Haitians</p>
            </div>

            <div className={styles.media}>
                    <a><i className="fab fa-facebook"></i></a>
                    <a><i className="fab fa-twitter"></i></a>
                    <a><i className="fab fa-linkedin"></i></a>  
                    <a><i className="fab fa-instagram"></i></a>
            </div>

            <div className={styles.download}>
                <p> Download </p>
                    <div>
                        <img src={appStore} />
                        <img src={playStore} /> 
                    </div>
            </div>

            <div className={styles.copyright}>
                <p>© Copyright 2021 Niouz, all rights reserved</p>
            </div>
        </footer>

    );

};

export default NewFooter;