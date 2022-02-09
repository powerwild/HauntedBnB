import { useState } from "react";
import { addSpotThunk } from "../../store/spots";
import { useDispatch } from 'react-redux';
import './NewHaunt.css';



const NewHauntForm = () => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ newImage, setNewImage ] = useState('')
    const [ images, setImages ] = useState([]);
    const [ validationErrors, setValidationErrors ] = useState([]);

    const dispatch = useDispatch();

    const addImages = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let imageArr = [...images];
        imageArr.push(newImage);
        setImages(imageArr);
        setNewImage('');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidationErrors([]);
        let errors = [];
        if (name.length < 3) errors.push('Name must be at least 3 characters long.');
        if (description.length < 5) errors.push('Please provide a decent description.');
        if (address.length < 5) errors.push('Please provide a valid address.');
        if (city.length < 3) errors.push('Please provide a valid city.');
        if (state.length < 3) errors.push('Please provide a valid state.');
        if (country.length < 3) errors.push('Please provide a valid country.');
        if (price < 1) errors.push('Please provide a valid price per night.');
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        return dispatch(addSpotThunk({name, description, address, city, state, country, price, images}))
            .catch( async (res) => {
                const data = await res.json();
                if (data?.errors) setValidationErrors(data.errors);
            })
    }

    return (
        <form className='new-haunt-form' onSubmit={(e) => handleSubmit(e)}>
            <ul>
                {validationErrors?.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
            </ul>
            <label htmlFor='name' className='haunt-form-label'>
                Name
                <input name='name'
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='address' className='haunt-form-label'>
                Street Address
                <input name='address'
                    type='text'
                    placeholder='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='city' className='haunt-form-label'>
                City
                <input name='city'
                    type='text'
                    placeholder='city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='state' className='haunt-form-label'>
                State
                <input name='state'
                    type='text'
                    placeholder='state'
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='country' className='haunt-form-label'>
                Country
                <input name='country'
                    type='text'
                    placeholder='country'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='price' className='haunt-form-label'>
                Price per night
                <input name='price'
                    type='number'
                    placeholder='price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='images' className='haunt-form-label'>
                New Image (must be added one at a time and in url format)
                <input name='images'
                    type= 'text'
                    placeholder='images'
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                />
                <button onClick={(e) => addImages(e)}>Add Image</button>
            </label>
            <label htmlFor='description' className='haunt-form-label'>
                Description
                <input name='description'
                    type='textarea'
                    placeholder='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </label>
            <button disabled={validationErrors.length > 0}>Add Haunt</button>
        </form>
    )
}


export default NewHauntForm;
