import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./pages/wallet";
import ThankYouPage from "./pages/thankyou";
import BookFarmVisit from "./pages/farmvisit";
import OfferZone from "./pages/OfferZone";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wallet />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/book-farm-visit" element={<BookFarmVisit />} />
        <Route path="/offer-zone" element={<OfferZone />} />
      </Routes>
    </Router>
  );
}

export default App;
