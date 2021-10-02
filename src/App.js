import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/landing";
import Jobs from "./components/jobs";
import Works from "./components/works";
import Popular from "./components/popular";
import Companies from "./components/companies";
import Customers from "./components/customers";
import Get from "./components/get";
import Footer from "./components/footer";

import Background from "./assets/svg/background.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <img src={Background} className="landing_background" alt="background" />
      <Navbar />
      <div className="content">
        <Landing />
        <Jobs />
        <Works />
        <Popular />
        <Companies />
        <Customers />
        <Get />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
