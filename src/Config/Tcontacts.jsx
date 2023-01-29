import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contacts';

export default function Tcontacts() {

    const {contacts} = useSelector(state=>({
        ...state.PageIn
    }))
    const dispatch = useDispatch();
    const [ville, setVille] = useState("");
    const [Try, setTry] = useState("");

    const supprimer= (idx)=>{
      dispatch({
        type:"sup",payload:idx
      
      })      
    }



  return (
    <>
    <br />
    <div className='select'>
    <select value={ville} style={{color:'brown',fontSize:'18px',margin:'0px 20px'}} onChange={(e)=>{setVille(e.target.value)}}>
            <option value=""style={{color:'brown',fontSize:'18px',margin:'0px 15px'}} disabled>Chooisissez une ville</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Tanger" >Tanger</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Tetouan" >Tetouan</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Casa" >Agadir</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Fes" >Fes</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Tantan" >Tantan</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="twissit" >Twissit</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Rabat" >Rabat</option>
            <option style={{backgroundColor:'pink',color:'white',fontSize:'18px'}} value="Akhfanir" >Casablanca</option>
        </select>
        <pre>    </pre>
    <select style={{color:'brown',fontSize:'18px',margin:'0px 20px'}} value={Try} onChange={(e)=>{setTry(e.target.value)}}>
            <option disabled style={{color:'brown',fontSize:'18px',margin:'0px 20px'}}>Triez par</option>
            <option value="" >défault</option>
            <option value="nomDesc" >décroissant</option>
        </select>
    </div>
        <br />
        <br />
        <ul id='ul' style={{borderBottom: '1px solid #e3e3e3 '}}>
          {
            contacts
            .sort((a,b)=>{
              switch (Try) {
                case "nomDesc":
                  return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
                  default:
                  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
              }
            })
            .map((elm)=>{
              if (elm.ville == ville){
                return <li key={elm.id}> <Contact element={elm} supp={()=>supprimer(elm.id)} /></li>
              } 
               else if (ville == "")
              {
                return <li key={elm.id}><Contact element={elm} supp={()=>supprimer(elm.id)} /></li>
              }
            })
          }
            </ul>       

    </>
  )
}