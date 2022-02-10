import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import { restoreUserSessionThunk } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SplashPage from "./components/SplashPage";
import HauntsPage from "./components/HauntsPage";
import HauntPage from "./components/HauntPage";
import { getAllHauntsThunk } from './store/haunts';

function App() {
  const dispatch = useDispatch();
  const [ pageRendered, setPageRendered ] = useState(false);
  const sessionUser = useSelector(state => state.session);
  const haunts = useSelector(state => state.haunts);

  useEffect(() => {
    if (!sessionUser.user) {
      dispatch(restoreUserSessionThunk()).then(() => setPageRendered(true))
    }
  }, []);

  useEffect(() => {
    if (sessionUser.user) dispatch(getAllHauntsThunk());
  }, [pageRendered])

  return (
    <>
      {pageRendered &&
        <>
          <Navigation pageRendered={pageRendered} />
          {!sessionUser.user && <Redirect to='/' />}
          <Switch>
            <Route exact path='/'>
              <SplashPage sessionUser={sessionUser}/>
            </Route>
            <Route exact path='/spots'>
              <HauntsPage sessionUser={sessionUser}/>
            </Route>
            <Route exact path='/spots/:spotId'>
              <HauntPage pageRendered={pageRendered} sessionUser={sessionUser}/>
            </Route>
          </Switch>
        </>
      }
    </>
  );
}

export default App;
