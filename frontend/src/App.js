import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import { restoreUserSessionThunk } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SplashPage from "./components/SplashPage";
import SpotsPage from "./components/SpotsPage";


function App() {
  const dispatch = useDispatch();
  const [ pageRendered, setPageRendered ] = useState(false);
  const sessionUser = useSelector(state => state.session);

  useEffect(() => {
    dispatch(restoreUserSessionThunk()).then(() => setPageRendered(true));
  }, []);


  return (
    <>
      {pageRendered &&
        <>
          <Navigation pageRendered={pageRendered} />
          {!sessionUser.user && <Redirect to='/' />}
          <Switch>
            <Route exact path='/spots'>
              <SpotsPage sessionUser={sessionUser}/>
            </Route>
            <Route path='/'>
              <SplashPage sessionUser={sessionUser}/>
            </Route>
          </Switch>
        </>
      }
    </>
  );
}

export default App;
