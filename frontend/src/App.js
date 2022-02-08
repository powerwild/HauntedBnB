import { Route, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import { restoreUserSessionThunk } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SplashPage from "./components/SplashPage";



function App() {
  const dispatch = useDispatch();
  const [ pageRendered, setPageRendered ] = useState(false);


  useEffect(() => {
    dispatch(restoreUserSessionThunk()).then(() => setPageRendered(true));
  }, []);


  return (
    <>
      {pageRendered &&
        <>
          <Navigation pageRendered={pageRendered} />
          <SplashPage />
        </>
      }
    </>
  );
}

export default App;
