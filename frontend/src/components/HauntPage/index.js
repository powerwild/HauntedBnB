import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HauntPage.css';


const HauntPage = () => {
    const { spotId } = useParams();
    const spots = useSelector(state => state.spots);
    let currSpot = spots[+spotId];

    return (
        <div className='haunt-details-page'>
            <p>{currSpot.spot.name}</p>
            {currSpot.images.map((image, i) => {
                return (
                    <img src={image.url} key={i} alt='' />
                    )
                }) }
            <p>{currSpot.spot.address}</p>
            <p>{currSpot.spot.city}</p>
            <p>{currSpot.spot.state}</p>
            <p>{currSpot.spot.country}</p>
            <p>{currSpot.spot.price}</p>
            <p>{currSpot.spot.description}</p>
        </div>
    )
}



export default HauntPage;
