
import { useState } from 'react'
import './App.css'
import CreatePost from './component/CreatePost'
import Footer from './component/Footer'
import Header from './component/Header'

import PostList from './component/PostList'
import Sidebar from './component/Sidebar'
import PostLsitProvider from './store/Post_Store'

function App() {
  const [selectTab, setselectTab
  ] = useState("Home");
  
  return (
    <PostLsitProvider>
    <div className='app-container'>
    <Sidebar selectTab={selectTab} setselectTab={setselectTab}/>
    <div className='conten'>
    <Header/>
    {selectTab==='Home'?<PostList/>:<CreatePost />}
    
    
    <Footer/>
    </div>
     
    </div>
    </PostLsitProvider>
  )
}

export default App
