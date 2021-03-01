import React from 'react';
import {Fragment} from 'react';
function main(props){
     //console.log(props)
     const {nombre} = props
    let saludo = "Hola usuario bienvenido";
    return (
        <div>
         <h1>pagina principal</h1>

         <p>{saludo} {nombre}</p>
        </div>
    )
}

export default main