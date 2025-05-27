import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
function Details() {
    const [chararterInfo,setCharacterInfo]=useState("")
const {id}=useParams()


useEffect(()=>{
       axios.get(`https://655127797d203ab6626e943b.mockapi.io/Character_fahad/${id}`)
  .then(function (response) {
    setCharacterInfo(response.data)
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[id])

return(
    <>
    <div>
<h1>{chararterInfo.name}</h1>
    </div>
    </>
)
  
}

export default Details