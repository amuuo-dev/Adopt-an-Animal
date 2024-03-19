import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
