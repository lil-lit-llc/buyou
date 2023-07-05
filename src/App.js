import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home.html");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <></>
  );
}

export default App;
