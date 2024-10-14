
import BookShow from './BookShow';


const BookList = ({ book, onDelete, onUpdate }: any) => {

  const renderBooks = book.map((data: any) => <BookShow onDelete={onDelete} key={data.id} bookData={data} onUpdate={onUpdate} />)
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  )
}

export default BookList