import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home.html");
    window.location.reload();
  }, [navigate]);
  return <><p>redirect</p></>;
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
