import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexViews from "./views/IndexViews";
import PageServices from "./views/PageServices/PageServices";
import PageWork from "./views/pageWork/PageWork";
import PageConact from "./views/pageContact/PageConact";
// import PageResume from "./views/pageResumes/pageResume";
// Page not found

import PageNotFound from "./components/Errors/PageNotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<IndexViews />} />
          <Route path="/service" element={<PageServices />} />
          <Route path="/work" element={<PageWork />} />
          {/* <Route path="/resume" element={<PageResume />} /> */}
          <Route path="/contact" element={<PageConact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
