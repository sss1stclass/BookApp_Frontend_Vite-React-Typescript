import { useState } from "react"
import BookEdit from "./BookEdit";

const BookShow = ({ bookData, onDelete, onUpdate }: any) => {

  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    onDelete(bookData.id)
  }

  // let content = <h3>{bookData.title}</h3>
  // if (edit) {
  //   content = <BookEdit />
  // }

  return (
    <div className='book-show'>
      <div>
        <img src={`https://picsum.photos/seed/${bookData.id}/300/200`} alt="books" />
        {
          edit ? <div style={{textTransform:'capitalize'}}>{bookData.title}</div> : <BookEdit onUpdate={onUpdate} bookData={bookData} handleEdit={handleEdit} />
        }

        {/* short hand for the same process that is done by content */}
        {/* {content} */}

      </div>
      <div className="actions">
        <button onClick={handleEdit} className="edit">Edit</button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow