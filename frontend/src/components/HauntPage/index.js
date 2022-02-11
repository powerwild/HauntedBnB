import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditHauntModal from './EditHauntModal';
import DeleteHauntModal from './DeleteHauntModal';
import { deleteImageThunk } from '../../store/haunts';
import { getRevsThunk } from '../../store/reviews';
import Reviews from '../ReviewsCompon';
import './HauntPage.css';
import { useEffect, useState } from 'react';


const HauntPage = ({sessionUser}) => {
    const { spotId } = useParams();
    const haunt = useSelector(state => state.haunts[spotId]);
    const [ pageRendered, setPageRendered ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRevsThunk(spotId)).then(() => setPageRendered(true));
    }, [])

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
                        <div className='spot-pictures' key={i}>
                            <img className='spot-pictures' src={image.url} key={i} alt='' />
                            {haunt.spot.userId === sessionUser.user.id && <button onClick={() => dispatch(deleteImageThunk(image.id, spotId))}>DELETE PIC</button>}
                        </div>
                        )
                    }) }
            </div>
            <p>{haunt.spot.address}        {haunt.spot.city}, {haunt.spot.state}  {haunt.spot.country}</p>
            <p>${haunt.spot.price}/night</p>
            <p>{haunt.spot.description}</p>
            {pageRendered && <Reviews id={haunt.spot.id} user={sessionUser}/>}
        </div>
    ) : (<Redirect to='/spots' />)
}



export default HauntPage;
