import axios from "axios";
import { useEffect, useState } from "react";
import { Div } from "./style";
export function Main(){
    const [apiImage, setApiImage] = useState([])
    const [api, setApi] = useState({})
    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(
        (response ) => {setApi(response.data.results)})
    },[])
    return(
        <Div>
          {Object.keys(api).map(pokemon => {
            return <div>{api[pokemon].name}</div>
          })}
          
        </Div>
    )
}