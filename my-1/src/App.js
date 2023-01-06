import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import Page1 from "./pages/page1";
import NoPage from "./pages/nopage";

export default function App() {
    return (
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Main/>}>
          <Route  index element={<Home />} />

          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));