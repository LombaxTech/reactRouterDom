import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [toys, setToys] = useState([]);

    const fetchItems = async () => {
        try {
            const result = await fetch('https://fortniteapi.io/items/list?lang=en', {
                headers: {
                    Authorization: "3389b650-a44be746-95265e41-b9af96c2"
                }
            });
            const data = await result.json();
            // console.log(data.items)
            const toys = data.items.toy;
            setToys(toys)
            console.log(toys)

            // var result = jsObjects.filter(obj => {
            //     return obj.b === 6
            // })

            let exampleToy = toys.filter(toy => toy.id == 'TOY_003_BeachBall');
            exampleToy = exampleToy[0]
            console.log(exampleToy)
            // toys.forEach(toy => console.log(toy.name))


            // const items = info.items;
            // for (let item in items) {
            //     console.log(item)
            // }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Shop</h1>
            {toys.map(toy => (
                <h1 key={toy.id}>
                    <Link to={`/shop/${toy.id}`}>{toy.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
