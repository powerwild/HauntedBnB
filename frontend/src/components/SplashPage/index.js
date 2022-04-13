import AboutMe from '../AboutMe';
import { Redirect } from 'react-router-dom';

import './SplashPage.css';


const SplashPage = ({sessionUser}) => {


    return (
        <div className='splash-page'>
            {sessionUser.user && <Redirect to='/spots' />}
            <div className='splash-greeting'>
                <h1>Welcome to HauntedBnB</h1>
                <h3>If you are looking for a good scare or just tired of the living, please sign up or log in above to start browsing our decrepit abodes.</h3>
            </div>
            <AboutMe />
        </div>
    )
}


export default SplashPage;
