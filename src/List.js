import React, { useEffect, useState } from 'react';

export default function List () {

    const [items, setItems] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.kanye.rest`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data && !data.error){
                setItems(data)
            }
        })
        .catch(console.log)
        .finally(setLoading(false))

    }, [])

    return (<div className="list">
        {/* {loading && <Loader />} */}
        {items && <h1>{items.quote}</h1>}
    </div>
    )
}