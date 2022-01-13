import React from "react"
import Gifcard from "./Gitcard"

export default function SearchField(){
    const [search,setSearch] = React.useState("")
    const [data,setData] = React.useState([])

    function updateSearch(event){
        setSearch(event.target.value)
    }

    React.useEffect(()=>{
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=aZFV2oHSbfWwZMoBp512mh5Z7ZY9I7Ni`)
    .then(res => res.json())
    .then(data => setData(data.data))
    .catch(error => console.log(error))
    },[search])

    const result = data.map(x => <Gifcard key={x} data={x} />)

    return(
        <div>
            <input value={search} onChange={updateSearch} type="text"/>
            {result}
        </div>
    )
}