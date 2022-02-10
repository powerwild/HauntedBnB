import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditHauntModal from './EditHauntModal';
import DeleteHauntModal from './DeleteHauntModal';
import './HauntPage.css';


const HauntPage = ({sessionUser}) => {
    const { spotId } = useParams();
    const spots = useSelector(state => state.spots);


    let currSpot = spots[spotId];
    console.log(currSpot)
    return currSpot.spot && (
        <div className='haunt-details-page'>
            <h1>{currSpot.spot.name}</h1>
            {sessionUser.user.id === currSpot.spot.userId &&
            <div className='edit-delete-spot-btn'>
                <EditHauntModal spot={currSpot.spot} />
                <DeleteHauntModal spot={currSpot.spot} />
            </div>
            }
            <div className='pictures-div'>
                {currSpot.spot.imageIndex.map((image, i) => {
                    return (
                        <img className='spot-pictures' src={currSpot.images[image].url} key={i} alt='' />
                        )
                    }) }
            </div>
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
