import React, { useEffect, useState } from 'react';
import Loader from './Loader.js'

export default function List () {

    const [items, setItems] = useState()
    const [faves, setFaves] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState();

    useEffect(() => {
        fetch(`https://api.kanye.rest`)
        .then(res=>res.json())
        .then(data=>{
            console.log("fetched data",data)
            if(data && !data.error){
                setItems(data)
            }
        })
        .catch(console.log)
        .finally(setLoading(false))

    }, [refresh])

    const handleButtonClick = () => {
        setRefresh({});
    }

    const handleAddFave = () => {
        // setFaves([items])
        // console.log("currrent quote", items)
        // console.log("faves",faves)
        setFaves([...faves, items])
        setRefresh({});
    }

    return (<div className="list">
        {loading && <Loader />}
        {items && <h1>{items.quote}</h1>}
        <button onClick={handleButtonClick}>Next</button>
        <button onClick={handleAddFave}>Add to favourites</button>
        <h1>Faves</h1>
        <ul>{faves && faves.map(fave=><li>{fave.quote}</li>)}</ul>
    </div>
    )
}