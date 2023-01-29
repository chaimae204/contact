import React from 'react'

export default function Contact({element, supp}) {
        return (
            <div>
                
                    <section>
                        <label className='nom' htmlFor="name">{element.name}</label>
                        <br />
                        <label className='number' htmlFor="number">{element.phone}</label>
                    <input className='del' type="button" value="Supprimer" style={{backgrounColor:'red',color:'white'}}  onClick={supp} />
                        <br />
                        <label className='ville' htmlFor="ville">{element.ville}</label>
                    </section>
                
                </div>
)
}