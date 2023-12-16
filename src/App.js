import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
         <Route path="/" element={<WelcomePage/>}/>
         <Route path="/SignUpPage" element={<SignUpPage/>}/>
         <Route path="/LoginPage" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
