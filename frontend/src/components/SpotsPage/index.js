import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllSpotsThunk } from '../../store/spots';
import { useDispatch } from 'react-redux';
import './Spots.css';


const SpotsPage = ({ sessionUser }) => {
    const spots = useSelector(state => state.spots);
    const [ readyToRender, setReadyToRender ] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
         dispatch(getAllSpotsThunk()).then(() => setReadyToRender(true));
    }, []);



    return readyToRender && (
        <>
            <h1>Browse Our Haunts</h1>
            <div className='spots-page'>
                {Object.values(spots).map((spotDets, i) => {
                    let firstPic = spotDets.spot.imageIndex[0];

                    return (
                        <div className='spot-divs' key={i}>
                            <h3 className='spots-titles'>{spotDets.spot.name}</h3>
                            <img className='spots-image' src={spotDets.images[firstPic].url} alt=''/>
                            <div className='spots-details'>
                                <div className='spots-city'>
                                    <p>{spotDets.spot.city}, {spotDets.spot.state}</p>
                                    <p>{spotDets.spot.country}</p>
                                </div>
                                <p>{spotDets.spot.price}/night</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default SpotsPage;
