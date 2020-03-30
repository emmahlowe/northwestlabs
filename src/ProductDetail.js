import React, { useState } from 'react';
import AppContext from "./context"
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const context = React.useContext(AppContext);
    const [count, setCount] = useState(1);
    let {id} = useParams()
    const p = context.products.find(x => x.id == id)//PRODUCTS[id]
    if (!p)
    {
        return (
            <h2>Product Not Found</h2>
        )
    }
    return (
        <div className="m-4">
            <div className="float-right border rounded m-2 p-2" style={{ width: '300px', height: '300px', }}>
            
            <img variant="top" src={'/media/products/' + p.filename + '-' + count + '.png'} alt={p.name} className="w-100"/>    
            <div>
                {["1", "2", "3", "4"].map(img_idx => (
                    <img 
                        key={p.id+img_idx}
                        alt={p.name}
                        src={`/media/products/${p.filename}-${img_idx}.png`}
                        className="border rounded mt-3 mx-1"
                        style={{
                            height: "30px",
                            width: "30px",
                        }}
                        onMouseEnter={() => {
                            setCount(img_idx)
                        }}
                    />
                ))}
            </div>
        </div>
            <div className="text-left">
                <h1>{p.name}</h1>
                <h1>${p.price}</h1>
                <p>{p.description}</p>
            </div>
            <button className="btn btn-secondary btn-lg"
            onClick={e => {
                context.addToCart(p.id)
            }}
            >
                Add To Cart
            </button>
            
        </div>
    )
    
}


export default ProductDetail;