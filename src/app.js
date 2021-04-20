import React from 'react';
import NavBar from './components/navBar';
import CreatePost from './components/createPost';
import Post from './components/post';
import './app.css';
import Side from './components/side';
const App = () => {

    
    return <div >
        
        
        
        <header className="header1"><NavBar/></header>
        {/* <NavBar/> */}
        <div className="main">
		<div className="left"><Side/></div>
		<div className="middle"> <CreatePost /><Post /></div>
		<div className="right"> <Side/>t</div>
        </div>

    </div>
        }

export default App;