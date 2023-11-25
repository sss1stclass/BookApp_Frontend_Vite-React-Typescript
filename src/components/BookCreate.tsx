import { useState } from 'react'

const BookCreate = ({ onCreate }: any) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: any) => {
    setTitle(event.target.value);

  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')

  }


  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input
          className='input'
          value={title}
          onChange={handleChange}
          type="text" required />
        <button className='button'>Create!</button>
      </form>
    </div>
  )
}

export default BookCreate