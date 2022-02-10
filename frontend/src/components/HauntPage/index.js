import { Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditHauntModal from './EditHauntModal';
import DeleteHauntModal from './DeleteHauntModal';
import './HauntPage.css';


const HauntPage = ({sessionUser}) => {
    const { spotId } = useParams();
    const haunt = useSelector(state => state.haunts[spotId]);


    return haunt ? (
        <div className='haunt-details-page'>
            <h1>{haunt.spot.name}</h1>
            {sessionUser.user.id === haunt.spot.userId &&
            <div className='edit-delete-spot-btn'>
                <EditHauntModal spot={haunt.spot} />
                <DeleteHauntModal spot={haunt.spot} />
            </div>
            }
            <div className='pictures-div'>
                {haunt.images.map((image, i) => {
                    return (
                        <img className='spot-pictures' src={image.url} key={i} alt='' />
                        )
                    }) }
            </div>
            <p>{haunt.spot.address}        {haunt.spot.city}, {haunt.spot.state}  {haunt.spot.country}</p>
            <p>${haunt.spot.price}/night</p>
            <p>{haunt.spot.description}</p>
        </div>
    ) : (<Redirect to='/spots' />)
}



export default HauntPage;
