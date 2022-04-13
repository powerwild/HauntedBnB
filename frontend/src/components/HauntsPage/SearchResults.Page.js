import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Haunts.css';


const SearchResultsPage = ({sessionUser}) => {
    const haunts = useSelector(state => state.session.search);

    return  haunts ? (
        <div className='spots-list'>
            <div className='spots-title-div'>
                <h1>Results...</h1>
            </div>
            <div className='spots-page'>
                {haunts.map((spot, i) => {

                        return (
                            <div className='spot-divs' key={i}>
                                <Link to={`/spots/${spot.id}`}>
                                    <h2 className='spots-titles'>{spot.name}</h2>
                                </Link>
                                <Link to={`/spots/${spot.id}`}>
                                    <img className='spots-image' src={spot.Images[0].url} alt=''/>
                                </Link>
                                <div className='spots-details'>
                                    <div className='spots-city-div'>
                                        <p className='spots-city'>{spot.city}, {spot.state}</p>
                                        <p className='spots-country'>{spot.country}</p>
                                    </div>
                                    <p className='spots-price'>${spot.price}/night</p>
                                </div>
                            </div>
                        )

                })}
            </div>
        </div >
    ) : null
}


export default SearchResultsPage;
