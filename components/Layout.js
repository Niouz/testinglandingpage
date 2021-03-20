import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import NewFooter from "./NewFooter";

const Layout = () => (
  <>
    <Header title="Niouz | Haitians App" logoSrc="hero-logo.png" />
    <Body
      title="Niouz Logo"
      Logo="logo.png"
      interfaceNiouzImage="Dark.png"
      googlePlayImage="google-play-icon.png"
      PlayStoreLink="https://niouzapp.com/"
    />
    <Footer />
      <NewFooter logo = "hero-logo.png" 
      playStore="google-play-icon.png" 
     />
  </>
);

export default Layout;
