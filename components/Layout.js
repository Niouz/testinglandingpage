import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import NewFooter from "./NewFooter";
import NewBody from "./NewBody";
import styles from "../styles/Home.module.css";

const Layout = () => (
  <div className={styles.bg}>
    <Header/>
    <Body
      title="Niouz Logo"
      Logo="logo.png"
      interfaceNiouzImage="Dark.png"
      googlePlayImage="google-play-icon.png"
      PlayStoreLink="https://niouzapp.com/"
    />
      <NewBody 
        logo="logo.png"
        interfaceNiouzImage="Dark.png"
      />
      <NewFooter 
      logo = "hero-logo.png" 
      googleLink = "https://niouzapp.com"
      playStore="google-play-icon.png" 
     />
     {/* <Footer /> */}
  </div>
);

export default Layout;
