import React,{useEffect} from 'react';


 const Data = () =>{


   const [equipo,setEquipo] = React.useState([])

   React.useEffect(()=>{
       
        getData()
   },[])

   const getData = async () =>{
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users =  await data.json()
       //console.log(users)
       setEquipo(users)
   }

    return(
        <div>
        <h1>Listado de usuarios</h1>

        <ul>
           {
              equipo.map(item=>(
                   <li key={item.id}>{item.name } - {item.email}</li>
              ))
           } 
        </ul>
        </div>
    )
}

export default Data