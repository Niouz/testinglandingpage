import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Layout = () => (
  <div>
    <Header title="Niouz | Haitians App" logoSrc="hero-logo.png" />
    <Body
      title="Niouz Logo"
      Logo="logo.png"
      interfaceNiouzImage="Dark.png"
      googlePlayImage="google-play-icon.png"
      PlayStoreLink="https://niouzapp.com/"
    />
    <Footer />
  </div>
);

export default Layout;
