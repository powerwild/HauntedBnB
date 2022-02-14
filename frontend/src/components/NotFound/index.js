import './NotFound.css';



const NotFound = () => {

    return (
        <>
            <div className='not-found-page'></div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeeUtD92GgprXY4KIisR7WW2UTh12r-UwfQ&usqp=CAU' className='tomestone'/>
            <div className='not-found'>
                <h2 className="R">Requested</h2>
                <h2 className="I">Information</h2>
                <h2 className="P">Program</h2>
            </div>
            <div className='not-found-message'>Sorry what you are looking for has moved on...</div>
        </>
    )
}



export default NotFound;
