import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Layout = () => (
  <div className={styles.container}>
    <Header title="Niouz | Haitians App" logoSrc="hero-logo.png" />
    <Body
      title="Niouz Logo"
      Logo="logo.png"
      interfaceNiouzImage="Dark.png"
      googlePlayImage="google-play-badge.png"
      PlayStoreLink="https://niouzapp.com/"
    />
    <Footer />
  </div>
);

export default Layout;
