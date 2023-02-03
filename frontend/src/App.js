// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Map from "./components/Map/Map";
import AboutUs from "./pages/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop";
import TournamentPage from "./pages/TournamentPage/TournamentPage";
import Checkout from "./components/Checkout/Checkout";
import CreateTournament from "./pages/CreateTournament/CreateTournament";
import UpdateTournament from "./pages/UpdateTournament/UpdateTournament";
import StripeContainer from "./components/Checkout/StripeContainer";
import FinalCheckout from "./pages/FinalCheckout/FinalCheckout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route 
          path="/register" 
          element={<RegisterPage />} 
        />
        <Route 
          path="/login" 
          element={<LoginPage />} 
        />
        <Route 
          path="/map" 
          element={<Map />} 
        />
        <Route 
          path="/tournament" 
          element={<TournamentPage />} 
        />
        <Route 
          path="/about-us" 
          element={<AboutUs />} 
        />
        <Route 
          path="/shop" 
          element={<Shop />} 
        />
        <Route 
          path="/FinalCheckout" 
          element={<FinalCheckout />} 
        />
        <Route 
          path="/createtournament" 
          element={<CreateTournament />} 
        />
        <Route 
          path="/updatetournament" 
          element={<UpdateTournament />} 
        />
        <Route 
          path="/profilepage" 
          element={<ProfilePage />} 
        />
        
      </Routes>
    </div>
  );
}

export default App;
