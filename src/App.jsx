import React, { useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HeaderNav from "./components/Header/HeaderNav";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    location.pathname === "/" && navigate("/home");
  }, []);
  return (
    <div>
      <Header />
      <HeaderNav/>
      <div className={styles.outletContainer}>
      <Outlet />
      </div>
    </div>
  );
}

export default App;
