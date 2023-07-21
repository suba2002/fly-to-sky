import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BookingPage } from "./pages/Booking Page/BookingPage";
import { Register } from "./components/Register/Register";
import { Payment } from "./components/Payment/Payment";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ < Register/> }></Route>
        <Route path="login" element={ < Login/>}/>
        <Route path="intro" element={<LandingPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="payment" element= {<Payment/>} />
      </Routes>
    </div>
  );
}

export default App;
