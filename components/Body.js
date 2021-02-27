import styles from "../styles/Home.module.css";
import Link from "next/link";

const Body = ({ title, Logo, interfaceNiouzImage , PlayStoreLink, googlePlayImage }) => (
  <div className={styles.body}>
    <img alt={title} src={Logo} />
    <p>
      Democratizing news <br /> for all <strong>Haitians.</strong>
    </p>
    <img className={styles.img} src={interfaceNiouzImage} />
    <Link href={PlayStoreLink} passHref={true}>
      <nav>
        {" "}
          <img src={googlePlayImage} />
        {" "}
      </nav>
    </Link>
  </div>
);

export default Body;
