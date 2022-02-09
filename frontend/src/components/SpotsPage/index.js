import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllSpotsThunk } from '../../store/spots';
import { useDispatch } from 'react-redux';


const SpotsPage = ({ sessionUser }) => {
    const spots = useSelector(state => state.spots);
    const [ readyToRender, setReadyToRender ] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
         dispatch(getAllSpotsThunk()).then(() => setReadyToRender(true));
    }, []);



    return readyToRender && (
        <>
            <h2>Spots</h2>
            {Object.values(spots).map((spotDets, i) => {
                let imgId = spotDets.spot.imageIndex[0];
                console.log(spotDets.images[imgId].url)
               return (
                    <div key={i}>
                        <img src={spotDets.images[imgId].url} alt=''/>
                        <p>{spotDets.spot.name}</p>
                        <p>{spotDets.spot.city}, {spotDets.spot.state} {spotDets.spot.country}</p>
                    </div>
                )
            })}
        </>
    )
}


export default SpotsPage;
