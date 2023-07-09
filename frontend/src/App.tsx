import { Routes, Route } from "react-router-dom";
import AppContainer from "./Components/Layout/AppContainer";
import Home from "./Pages/Home";
import Employees from "./Pages/Employees";
import Departments from "./Pages/Departments";
import NotFound from "./Pages/NotFound";

function App(): JSX.Element {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
