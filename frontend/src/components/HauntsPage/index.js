import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NewHauntModal from '../NewHauntsFormPage';
import { Link } from 'react-router-dom';
import './Haunts.css';


const HauntsPage = () => {
    const haunts = useSelector(state => state.haunts);



    return  (
        <>
            <div className='spots-title-div'>
                <h1>Browse Our Haunts</h1>
                <NewHauntModal className='new-haunt-btn'/>
            </div>
            <div className='spots-page'>
                {Object.values(haunts).map((spotNimages, i) => {

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
                                    <p>{spotNimages.spot.country}</p>
                                </div>
                                <p className='spots-price'>${spotNimages.spot.price}/night</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default HauntsPage;
