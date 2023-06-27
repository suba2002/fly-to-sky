import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BookingPage } from "./pages/Booking Page/BookingPage";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ < Register/> }></Route>
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
