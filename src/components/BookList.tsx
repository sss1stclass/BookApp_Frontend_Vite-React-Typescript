
import BookShow from './BookShow'
import { useContext } from 'react'
import BookContext from '../context/book'


const BookList = ({book, onDelete, onUpdate}:any) => {

  const value = useContext(BookContext);

  // this is context

    const renderBooks = book.map((data:any)=><BookShow onDelete={onDelete} key={data.id} bookData={data} onUpdate = {onUpdate}/>)
  return (
    <div className='book-list'>
      {value}
             {renderBooks}
    </div>
  )
}

export default BookList