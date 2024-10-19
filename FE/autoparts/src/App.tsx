import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";
import { useState } from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
import Payment from "./pages/billing/payment";
import Success from "./pages/billing/success";
import Failure from "./pages/billing/failure";
import PrivateRoute from "./components/PrivateRoute";
import { Case, Default, Switch } from "./components/Switch";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";

function App() {
  const [verifyLogin, setVerifyLogin] = useState<number>(1);
  const [duration, setDuration] = useState<number | null>(0);
  const [audioUrl, setAudioUrl] = useState<string | null>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [viewTransactions, setViewTransactions] = useState(false);

  return (
    <div
      id="App-Home"
      className="bg-[#03071E] desktop:overflow-hidden h-full flex flex-col w-full overflow-hidden"
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <Router>
        <Navbar setViewTransactions={setViewTransactions} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <RedirectIfLoggedIn>
                  <Login />
                </RedirectIfLoggedIn>
              </div>
            }
          />
          <Route
            path="/billing"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment/success"
            element={
              // <PrivateRoute>
              <Success />
              // </PrivateRoute>
            }
          />
          <Route
            path="/payment/failure"
            element={
              // <PrivateRoute>
              <Failure />
              // </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Switch value={verifyLogin}>
                  <Case case={0}>
                    <Homepage
                      duration={duration}
                      audioUrl={audioUrl}
                      videoFile={videoFile}
                      setDuration={setDuration}
                      setAudioUrl={setAudioUrl}
                      setVideoFile={setVideoFile}
                      viewTransactions={viewTransactions}
                      setViewTransactions={setViewTransactions}
                    />
                  </Case>
                  <Case case={-1}>
                    <Navigate to="/login" />
                  </Case>
                  <Case case={1}>
                    <Loading setVerifyLogin={setVerifyLogin} />
                  </Case>
                  <Default>
                    <Loading setVerifyLogin={setVerifyLogin} />
                  </Default>
                </Switch>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
