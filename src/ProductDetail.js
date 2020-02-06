import React from 'react';
import PRODUCTS from './products';
import { useParams } from 'react-router-dom';
import { setImage } from 'react';


function ProductDetail(props) {
    let {id} = useParams()
    console.log(id)
    const p = PRODUCTS[id]
    //const count = useState(1)
    if (!p)
    {
        return (
            <h2>Product Not Found</h2>
        )
    }
    return (
        <div className="m-4">
            <div className="float-right border rounded m-2 p-2" style={{ width: '300px', height: '300px', }}>
            
            <img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} className="w-100"/>    
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
                        onMouseEnter={e => {
                            //useState(2)
                            setImage(img_idx);
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
            
        </div>
        // <div className="row row-cols-2">
        //     <div className="text-left col">
        //         <h1>{p.name}</h1>
        //         <h1>${p.price}</h1> 
        //         <p>{p.description}</p>
        //     </div>
        //     <div className="float-right col">
        //         <img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} className="img-thumbnail"/>
        //     </div>
        //     <div className="float-right col">
        //         <img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} className="img-thumbnail w-25 h-25" style={test} />
        //         <img variant="top" src={'/media/products/' + p.filename + '-2.png'} alt={p.name} className="img-thumbnail w-25"/>
        //         <img variant="top" src={'/media/products/' + p.filename + '-3.png'} alt={p.name} className="img-thumbnail w-25"/>
        //         <img variant="top" src={'/media/products/' + p.filename + '-4.png'} alt={p.name} className="img-thumbnail w-25"/>
        //     </div>
        // </div>
    )
    
}


export default ProductDetail;