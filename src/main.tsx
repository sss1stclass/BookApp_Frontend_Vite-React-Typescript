import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BookContext from './context/book.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookContext.Provider value={5}>
      <App />
    </BookContext.Provider>
  </React.StrictMode>,
)
// ReactDOM.render(<App/>, document.getElementById('root')) 