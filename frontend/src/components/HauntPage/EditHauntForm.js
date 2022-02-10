import { useEffect, useState } from "react";
import { updateSpotThunk } from "../../store/spots";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './HauntPage.css';


const EditHauntForm = ({spot}) => {
    const [ name, setName ] = useState(spot.name);
    const [ description, setDescription ] = useState(spot.description);
    const [ address, setAddress ] = useState(spot.address);
    const [ city, setCity ] = useState(spot.city);
    const [ state, setState ] = useState(spot.state);
    const [ country, setCountry ] = useState(spot.country);
    const [ price, setPrice ] = useState(spot.price);
    const [ validationErrors, setValidationErrors ] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidationErrors([]);
        await dispatch(updateSpotThunk({name, description, address, city, state, country, price}))
            .catch( async (response) => {
                const data = await response.json();
                if (data?.errors) setValidationErrors(data.errors);
            });
    }

    useEffect(() => {
        let errors = [];
        if (name.length < 3) errors.push('Name must be at least 3 characters long.');
        if (address.length < 5) errors.push('Please provide a valid address.');
        if (city.length < 3) errors.push('Please provide a valid city.');
        if (state.length < 3) errors.push('Please provide a valid state.');
        if (country.length < 3) errors.push('Please provide a valid country.');
        if (price < 1) errors.push('Please provide a valid price per night.');
        if (description.length < 5) errors.push('Please provide a decent description.');
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        return setValidationErrors([]);

    }, [name, description, address, city, state, country, price])


    return (
        <form className='edit-haunt-form' onSubmit={handleSubmit}>
            <ul>
                {validationErrors?.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
            </ul>
            <label htmlFor='name' className='edit-form-label'>
                Name
                <input name='name'
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='address' className='edit-form-label'>
                Street Address
                <input name='address'
                    type='text'
                    placeholder='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='city' className='edit-form-label'>
                City
                <input name='city'
                    type='text'
                    placeholder='city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='state' className='edit-form-label'>
                State
                <input name='state'
                    type='text'
                    placeholder='state'
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='country' className='edit-form-label'>
                Country
                <input name='country'
                    type='text'
                    placeholder='country'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='price' className='edit-form-label'>
                Price per night
                <input name='price'
                    type='number'
                    placeholder='price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='description' className='edit-form-label'>
                Description
                <input name='description'
                    type='textarea'
                    placeholder='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </label>
            <button disabled={validationErrors.length > 0}>Update Haunt</button>
        </form>
    )
}


export default EditHauntForm;
