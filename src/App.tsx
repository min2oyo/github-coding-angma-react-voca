import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header";
import DayList from "./pages/DayList";
import Day from "./pages/Day";
import CreateDay from "./pages/CreateDay";
import CreateWord from "./pages/CreateWord";
import EmptyPage from "./pages/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create-day" element={<CreateDay />} />
          <Route path="/create-word" element={<CreateWord />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
