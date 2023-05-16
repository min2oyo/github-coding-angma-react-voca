import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import CreateDay from "./components/CreateDay";
import CreateWord from "./components/CreateWord";
import EmptyPage from "./components/EmptyPage";

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
