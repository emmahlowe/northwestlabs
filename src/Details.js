import React from 'react';
import NotFound from './NotFound';
import PRODUCTS from './products';
// import { Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const test = {
    weight: '2px',
    height: '2px'
};

function Details(props) {
    //whatever you're doing with variables
    //const p = PRODUCTS.props.match.params.id //PRODUCTS[match.params.props] //Object.values(PRODUCTS).find(props) //look up filter method for this
    let {id} = useParams()
    console.log(id)
    const p = PRODUCTS[id]
    if (!p)
    {
        return (
            <NotFound></NotFound>
        )
    }
    else{
        return (
            <>
                <div className="text-left">
                    <h1>{p.name}</h1>
                    <h1>${p.price}</h1> 
                    <p>{p.description}</p>
                </div>
                <div className="float-right">
                    <img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} className="img-thumbnail"/>
                    <img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} className="img-thumbnail w-25 h-25" style={test} />
                    <img variant="top" src={'/media/products/' + p.filename + '-2.png'} alt={p.name} className="img-thumbnail w-25"/>
                    <img variant="top" src={'/media/products/' + p.filename + '-3.png'} alt={p.name} className="img-thumbnail w-25"/>
                    <img variant="top" src={'/media/products/' + p.filename + '-4.png'} alt={p.name} className="img-thumbnail w-25"/> 
                </div>
            </>
        )
    }
    
}


export default Details;