import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MyHaunts.css';


const MyHauntsPage = ({sessionUser}) => {
    const haunts = useSelector(state => state.haunts);
    return  (
        <div className='haunts-list'>
            <div className='haunts-title-div'>
                <h1>Your Haunts</h1>
            </div>
            <div className='haunts-page'>
                {Object.values(haunts).map((spotNimages, i) => {
                    if (spotNimages.spot.ownerId === sessionUser.user.id) {
                        return (
                            <div className='haunt-divs' key={i}>
                                <Link to={`/spots/${spotNimages.spot.id}`}>
                                    <h2 className='haunts-titles'>{spotNimages.spot.name}</h2>
                                </Link>
                                <Link to={`/spots/${spotNimages.spot.id}`}>
                                    <img className='haunts-image' src={spotNimages.images[0].url} alt=''/>
                                </Link>
                                <div className='haunts-details'>
                                    <div className='haunts-city-div'>
                                        <p className='haunts-city'>{spotNimages.spot.city}, {spotNimages.spot.state}</p>
                                        <p className='haunts-country'>{spotNimages.spot.country}</p>
                                    </div>
                                    <p className='haunts-price'>${spotNimages.spot.price}/night</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}


export default MyHauntsPage;
