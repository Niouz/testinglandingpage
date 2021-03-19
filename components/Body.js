import styles from "../styles/Home.module.css";
import Link from "next/link";

const Body = ({ title, Logo, interfaceNiouzImage , PlayStoreLink, googlePlayImage }) => (

  <main className={styles.main}>

    <div className={styles.container}>

      <div className={styles.logo}>
        <img alt={title} src={Logo} />
      </div>
      
      <div className={styles.slogan}>
        <p>Democratizing news <br /> for all <strong>Haitians.</strong></p>
      </div>

      <div className={styles.googlePlay}>
        <Link href={PlayStoreLink} passHref={true}>
              <img src={googlePlayImage} alt="Niouz Interface"/>
        </Link>
      </div>

  </div>

    <div className={styles.containerr}>
          <img src={interfaceNiouzImage} />
    </div>

    <div className={styles.googlePlayMobile}>
        <Link href={PlayStoreLink} passHref={true}>
              <img src={googlePlayImage} alt="Niouz Interface"/>
        </Link>
      </div>
      
  </main>
  
);

export default Body;
