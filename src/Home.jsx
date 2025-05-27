import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function Home() {
const[character,setCharacter]=useState([])
useEffect(()=>{
    axios.get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
  .then(function (response) {
    setCharacter(response.data)
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[])

  return (
  <>
  <div>
    {character.map((item,i)=>(
        <div key={i}>
            <h1>{item.name}</h1>
<Link to={`/details/${item.id}`}>
<img src={item.image} alt="" />
</Link>
 </div>
    ))}
  </div>
    </>
  )
}

export default Home