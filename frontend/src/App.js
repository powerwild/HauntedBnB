import { Route, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import { restoreUserSessionThunk } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



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
          <h2>Splash</h2>
        </>
      }
    </>
  );
}

export default App;
