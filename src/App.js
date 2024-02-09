import Home from "./pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import EbookDetails from "./pages/EbookDetails/EbookDetails";

function App() {
  return (
    <div className="App">
      <NavBar
        details={[
          "Home",
          "News",
          "Courses",
          "EBooks",
          "Contact Us"
        ]}
        lang="العربيه"
      />

      {/* using routes here to change view from Home to another view */}
      <Home />
      {/*<EbookDetails  />*/}
      <Footer />
    </div>
  );
}

export default App;
