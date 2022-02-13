import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditHauntModal from '../EditHauntModal';
import DeleteHauntModal from '../DeleteHauntModal';
import { deleteImageThunk } from '../../store/haunts';
import { getRevsThunk } from '../../store/reviews';
import Reviews from '../ReviewsCompon';
import './HauntPage.css';
import { useEffect } from 'react';



const HauntPage = ({sessionUser}) => {
    const { spotId } = useParams();
    const haunt = useSelector(state => state.haunts[spotId]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRevsThunk(spotId));
    }, [])

    return haunt ? (
        <div className='haunt-details-page'>
            <h1 className='haunt-name'>{haunt.spot.name}</h1>
            {sessionUser.user.id === haunt.spot.userId &&
            <div className='edit-delete-spot-btn'>
                <EditHauntModal className='edit-haunt-btn' spot={haunt.spot} />
                <DeleteHauntModal className='delete-haunt-btn' spot={haunt.spot} />
            </div>
            }
            <div className='pictures-div'>
                {haunt.images.map((image, i) => {
                    return (
                        <div className='haunt-pictures' key={i}>
                            <img className='haunt-picture' src={image.url} key={i} alt='' />
                            {haunt.spot.userId === sessionUser.user.id && <button className='delete-picture-btn' onClick={() => dispatch(deleteImageThunk(image.id, spotId))}>DELETE PIC</button>}
                        </div>
                        )
                    }) }
            </div>
            <div className='haunt-dets-div'>
            <p className='haunt-details'>{haunt.spot.address}        {haunt.spot.city}, {haunt.spot.state}  {haunt.spot.country}</p>
            <p className='haunt-price'>${haunt.spot.price}/night</p>
            <p className='haunt-description'>{haunt.spot.description}</p>
            </div>
            <Reviews id={haunt.spot.id} user={sessionUser}/>
        </div>
    ) : (<Redirect to='/spots' />)
}



export default HauntPage;
