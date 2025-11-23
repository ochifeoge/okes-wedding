import ImageGallery from "./components/ImageGallery";
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
      <ImageGallery />
      <Info />
      <WishList />
      <QrCodeSection />
      <footer className="w-full text-center py-4 text-sm text-pink-500">
        Made with ❤️ by
        <a
          href="https://wa.me/2349022517371"
          target="_blank"
          className="underline ml-1 hover:text-pink-600"
        >
          Ochife
        </a>
      </footer>
    </AppProvider>
  );
};

export default App;
