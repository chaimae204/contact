import React from 'react'
import { Link } from 'react-router-dom'


export default function Pagecon() {


  return (
    <div>
    <br />
    <div id='body'>
        <h1 id='titre' style={{color:'red' ,fontSize: '60px'}}>
    <img src="personne.PNG" id='image'/> Contact App</h1>
      <nav>
    <Link className='link' to="/"><h5 style={{color:'rgb(51, 248, 248)',display:'inline',margin:'0px 20px', borderBottom: '1px solid #e3e3e3 ',fontSize: '24px'}}> Contacts </h5></Link>
    <Link className='link' to="/Ajouter"><h5 style={{color:'rgb(51, 248, 248)',display:'inline',margin:'0px 15px',borderBottom: '1px solid #e3e3e3 ',fontSize: '24px'}}>Ajouter Contact </h5></Link>
      </nav>
    </div>
    </div>
  )
}