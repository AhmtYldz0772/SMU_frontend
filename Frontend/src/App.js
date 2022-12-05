import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "54%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "72%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "90%", right: "-8rem" }}></div>
      <div className="blur" style={{ top: "108%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "120%", right: "8rem" }}></div>
      <div className="blur" style={{ top: "%138", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "72%", right: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        {/* <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;