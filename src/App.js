import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./component/Navbar";
import Pricng from "./component/Pricng";
import Subscription from "./component/Subscription.jsx";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Pricng />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
