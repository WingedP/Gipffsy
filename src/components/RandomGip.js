import React,{useState,useEffect} from 'react';
import './componentstyle/randogip.css';

export default function RandomGip() {
    const apiKey =process.env.REACT_APP_GIPHY_KEY;
    let [randoGip,setRandoGip]=useState();
    useEffect(()=>{getRandomGip()},[])
    const getRandomGip = async()=>{
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        let data = await response.json();
        console.log("randogip data here:",data.data);
        
        setRandoGip(data.data)
    }
    
    return (
        <div className="randoGip">
            {/* {randoGip && randoGip.images ? randoGip.images.downsized_small : "loading"} */}
        </div>
    )
}
