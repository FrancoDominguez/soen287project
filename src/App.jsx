import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./../public/menuOptions.json";
import "./styles.css";
import { AppProvider } from "./components/context";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import BrowsePetsPage from "./pages/browsePets";
import ContactUsPage from "./pages/contactUs";
import FindPetPage from "./pages/findPet";
import GiveYourPetPage from "./pages/giveYourPet";
import HomePage from "./pages/home";
import PetCarePage from "./pages/petCare";
import DisclaimerPage from "./pages/disclaimer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <AppProvider>
        <div className="flex flex-row h-screen w-screen overflow-auto">
          <div className="mobile:hidden tablet:hidden desktop:block sticky top-0 bg-slate-800 w-[18%] min-w-fit">
            <Sidebar pages={data} />
          </div>
          <div className="flex flex-col h-full w-full overflow-auto">
            <div className="mobile:block tablet:block desktop:hidden sticky top-0 bg-slate-800 w-full">
              <Sidebar pages={data} />
            </div>
            <div className="sticky top-0 bg-slate-800 w-full min-h-fit p-1">
              <Header />
            </div>
            <div className="overflow-y-auto">
              <div className="bg-slate-600 min-h-screen flex-grow">
                <Routes>
                  <Route path="" element={<HomePage />}></Route>
                  <Route
                    path="browse-pets"
                    element={<BrowsePetsPage />}
                  ></Route>
                  <Route path="find-pet" element={<FindPetPage />}></Route>
                  <Route path="pet-care" element={<PetCarePage />}></Route>
                  <Route path="give-away" element={<GiveYourPetPage />}></Route>
                  <Route path="contact-us" element={<ContactUsPage />}></Route>
                  <Route path="disclaimer" element={<DisclaimerPage />}></Route>
                </Routes>
              </div>
              <div className="bg-slate-800 min-h-[5vh]">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
