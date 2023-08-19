import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<div> Page Not Found </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
