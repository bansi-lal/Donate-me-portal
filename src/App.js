import Features from "./components/home/features/Features";
import Footer from "./components/home/footer/Footer";
import Header from "./components/home/Header";
import Slider from "./components/home/slider/Slider";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
