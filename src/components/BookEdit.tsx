import { useState } from 'react';

const BookEdit = ({ bookData, onUpdate, handleEdit }: any) => {

    const [title, setTitle] = useState(bookData.title)

    const handleChange = (event: any) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onUpdate(bookData.id, title);
        handleEdit();


    }

    return (
        <>
            <form onSubmit={handleSubmit} action="">
            <label >Title</label>
            <input className='input' type='text' required value={title} onChange={handleChange} />
            {/* <button onClick={(event) => { handleSubmit(event); handleEdit(); }} className='button is-primary'> */}
            <button style={{marginTop:10}}  className='button is-primary'>
                save
            </button>
            </form>
        </>
    ) 
}

export default BookEdit