
import React from "react";
import { Route, Routes} from "react-router-dom";
import Promotion from "./components/pages/promotion";
import Vacancie from "./components/pages/vacancie";
import Manufacture from "./components/pages/manufacture";
function App() {
  return (
<>
  <Routes>
        <Route path="/" element={<Promotion/>}></Route>
        <Route path="/productCategory" element={ <Vacancie/> }></Route>
        <Route path="/org/:id" element={<Manufacture/>}></Route>
        
  </Routes>
</>
  );
}

export default App;
