import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import WelcomePage from "./Pages/WelcomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Render the NavBar outside of the Routes */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ChatPage/:userId" element={<ChatPage />} /> {/* Use element instead of component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
