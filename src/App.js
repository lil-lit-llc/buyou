import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";

function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home.html");
    window.location.reload();
  }, [navigate]);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <GridLoader color="#7444C0" size={50} />
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RedirectToHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
