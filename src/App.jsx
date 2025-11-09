import AppProvider from "./components/AppProvider";
import FloatingMenu from "./components/FloatingMenu";
import Hero from "./components/Hero";
import Info from "./components/Info";
import OurStory from "./components/OurStory";
import QrCodeSection from "./components/QrCodeSection";
import WishList from "./components/WishList";

const App = () => {
  return (
    <AppProvider>
      <FloatingMenu />
      <Hero />
      <OurStory />
      <Info />
      <WishList />
      <QrCodeSection />
    </AppProvider>
  );
};

export default App;
