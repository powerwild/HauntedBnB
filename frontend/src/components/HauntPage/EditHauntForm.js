import { useEffect, useState } from "react";
import { updateHauntThunk } from "../../store/haunts";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './HauntPage.css';


const EditHauntForm = ({spot, onClose}) => {
    const [ name, setName ] = useState(spot.name);
    const [ description, setDescription ] = useState(spot.description);
    const [ price, setPrice ] = useState(spot.price);
    const [ validationErrors, setValidationErrors ] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidationErrors([]);
        return await dispatch(updateHauntThunk({id: spot.id, name, description, price})).then(onClose())
            // .catch( async (response) => {
            //     const data = await response.json();
            //     if (data?.errors) setValidationErrors(data.errors);
            // });
    }

    useEffect(() => {
        let errors = [];
        if (name.length < 3) errors.push('Name must be at least 3 characters long.');
        if (price < 1) errors.push('Please provide a valid price per night.');
        if (description.length < 5) errors.push('Please provide a decent description.');
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        return setValidationErrors([]);

    }, [name, description, price])


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
           <label>
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
