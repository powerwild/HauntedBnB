import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/NavigationBar";
import { restoreUserSessionThunk } from "./store/session";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SplashPage from "./components/SplashPage";
import HauntsPage from "./components/HauntsPage";
import HauntPage from "./components/HauntPage";
import { getAllHauntsThunk } from './store/haunts';
import MyHauntsPage from "./components/HauntsPage/MyHauntsPage";
import NotFound from "./components/NotFound";
import SearchResultsPage from "./components/HauntsPage/SearchResults.Page";

function App() {
  const dispatch = useDispatch();
  const [ pageRendered, setPageRendered ] = useState(false);
  const sessionUser = useSelector(state => state.session);

  useEffect(() => {
    if (!sessionUser.user) {
      dispatch(restoreUserSessionThunk()).then(() => setPageRendered(true))
    }
  }, [dispatch]);

  useEffect(() => {
    if (sessionUser.user) dispatch(getAllHauntsThunk());
  }, [pageRendered, dispatch, sessionUser?.user])

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
            <Route exact path='/myspots'>
              <MyHauntsPage sessionUser={sessionUser}/>
            </Route>
            <Route path='/search'>
              <SearchResultsPage />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </>
      }
    </>
  );
}

export default App;
