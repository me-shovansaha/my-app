import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
 const [bookmarks,setBookmarks] = useState([]);
 const [read,setRead] = useState(0);



 const handleBookmark = blog =>{
  console.log(blog);
  const newBookmark = [...bookmarks,blog];
  setBookmarks(newBookmark);
 }

 const handleRead = time =>{
   console.log(time);
  const readTime = read + time;
  setRead(readTime);
  
 }

 


  return (
    <>
     <Header></Header>
     <div className='md: flex max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs>
     <Bookmarks bookmarks = {bookmarks} read={read}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
