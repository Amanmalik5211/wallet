import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./pages/wallet";
import ThankYouPage from "./pages/thankyou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wallet />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
