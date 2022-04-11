import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Haunts.css';


const SearchResultsPage = ({sessionUser}) => {
    const haunts = useSelector(state => state.session.search);

    return  (
        <div className='spots-list'>
            <div className='spots-title-div'>
                <h1>Results...</h1>
            </div>
            <div className='spots-page'>
                {haunts.map((spotNimages, i) => {

                        return (
                            <div className='spot-divs' key={i}>
                                <Link to={`/spots/${spotNimages.spot.id}`}>
                                    <h2 className='spots-titles'>{spotNimages.spot.name}</h2>
                                </Link>
                                <Link to={`/spots/${spotNimages.spot.id}`}>
                                    <img className='spots-image' src={spotNimages.images[0].url} alt=''/>
                                </Link>
                                <div className='spots-details'>
                                    <div className='spots-city-div'>
                                        <p className='spots-city'>{spotNimages.spot.city}, {spotNimages.spot.state}</p>
                                        <p className='spots-country'>{spotNimages.spot.country}</p>
                                    </div>
                                    <p className='spots-price'>${spotNimages.spot.price}/night</p>
                                </div>
                            </div>
                        )

                })}
            </div>
        </div >
    )
}


export default SearchResultsPage;
