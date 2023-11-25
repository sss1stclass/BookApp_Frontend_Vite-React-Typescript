import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList";
import { useState } from 'react';

const App = () => {

  const [book, setBook] = useState<string | any>([])

  const handleCreate = (title: any) => {
    const updateBooks = [
      ...book,
      { id: Math.round(Math.random() * 9999), title }
    ];
    setBook(updateBooks);
  }
   
    const handleUpdateById =(id:any, newTitle:any)=>{
        const updatedBooks = book.map((data:any)=>{
          if(data.id === id ) {
           return  {...data, title:newTitle }
           
          }

          return data;
        })

        setBook(updatedBooks);
    }

  const handleDelete = (id:number) =>{
    const deleteBook = book.filter((book:any)=>{
      return book.id!==id;
    })
    setBook(deleteBook);
  }

  return (
    <>


      <div className="app ">
        <h1>Book List</h1>
        <BookList book={book} onDelete= {handleDelete} onUpdate = {handleUpdateById} />
        <BookCreate onCreate={handleCreate} />
      </div>
    </>
  )
}

export default App