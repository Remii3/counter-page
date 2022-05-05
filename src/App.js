import Counter from "./components/Counter";
import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}

      <Counter />
    </React.Fragment>
  );
}

export default App;
