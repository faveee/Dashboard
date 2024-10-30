import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./pages/Footer";
import Header from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path="/" element={<Footer />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
