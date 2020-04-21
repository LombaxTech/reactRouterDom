import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Toy({ match }) {

    useEffect(() => {
        fetchItem();
    }, [])

    // const [toy, setToy] = useState({});
    const [toy, setToy] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const response = await fetch('https://fortniteapi.io/items/list?lang=en', {
            headers: {
                'Authorization': "3389b650-a44be746-95265e41-b9af96c2"
            }
        })
        const data = await response.json();
        // console.log(data);
        const toys = data.items.toy;
        let toy = toys.filter(toy => toy.id == `${match.params.id}`);
        toy = toy[0];
        setToy(toy);
        console.log(toy);
        // console.log(toy.images.icon)
    }

    return (
        <div>
            <h1>{toy.name}</h1>
            <img src={toy.images.icon} alt="" />
            <p>{toy.description}</p>
            <h2>Price: {toy.price}</h2>
            {/* {console.log(match.params.id)} */}
            {/* {console.log(toy.images.icon)} */}
        </div>
    );
}

export default Toy;
