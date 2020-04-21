import React, { useState, useEffect } from 'react';

function ExampleProblem() {

    // TODO ======================================================

    // * This works 
    const [product, setProduct] = useState({
        imageLinks: {}
    });

    // ! This doesnt work
    // const [product, setProduct] = useState({});

    // TODO ======================================================

    useEffect(() => {

        let exampleProduct = {
            title: 'Example Product',
            imageLinks: {
                linkOne: 'link one to product',
                linkTwo: 'link two to product',
                linkThree: 'link three to product'
            }
        }

        setProduct(exampleProduct);

    }, [])

    return (
        <div>
            <h1>This is the problem</h1>
            <h2>{product.title}</h2>
            <h3>{product.imageLinks.linkOne}</h3>
        </div>
    )
}

export default ExampleProblem;