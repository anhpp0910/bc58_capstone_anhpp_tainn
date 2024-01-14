import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./layout/Layout";
import Spinner from "./components/Spinner/Spinner";
import TicketRoomPage from "./pages/TicketRoomPage/TicketRoomPage";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:maPhim" element={<DetailPage />} />
            <Route
              path="/ticketroom/:maLichChieu"
              element={<TicketRoomPage />}
            />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
