import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexViews from "./views/IndexViews";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexViews />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
