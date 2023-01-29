
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Ajouter(){

   const {Contacts} = useSelector(state=>({
       ...state.PageIn
   }))

   const dispatch = useDispatch();

   const ajtC = ()=>{
       dispatch({
           type:"ajt",
           payload:[nom,phone,ville]
       })
   }

   const [nom, setNom] = useState("");
   const [phone, setTel] = useState("");
   const [ville, setVille] = useState("");
   return(
    <div>
        <br />
    <label className='label' style={{color:'gray',fontSize:'18px'}} htmlFor='nom'>Nom et Prènom :  </label>
    <input className='iptajt' style={{margin:'24px 0px'}} type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
    <br />

    <label className='label'style={{color:'gray',fontSize:'18px'}} htmlFor="tel">Phone:  </label>
    <input className='iptajt' type="tel" value={phone} onChange={(e)=>{setTel(e.target.value)}}/>
    <br />
    <br />

    <label className='label'style={{color:'gray',fontSize:'18px'}} htmlFor="ville"> Ville : </label>
    <select className='iptajt'  value={ville} onChange={(e)=>{setVille(e.target.value)}}>
        <option id='option' style={{backgroundColor:'pink',color:'white'}} value="" disabled>  Quelle ville</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Oujda" >Tanger</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Taza" >Taza</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Fes" >Fes</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Tantan" >Tantan</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Twissit" >Twissit</option>
        <option id='option'style={{backgroundColor:'pink',color:'white'}} value="Akhfanir" >Rabat</option>
    </select>
    <br />
    <br />
    <input className='add' type="button" value="Ajouter"  style={{backgroundColor:'rgb(51, 248, 248)', margin:'10px',color:'white'}} onClick={ajtC} />

    </div>
)
}