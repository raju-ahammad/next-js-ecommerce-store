import baseUrl from "../../uttils/baseUrl"

const ProductDetils = ({product}) => {
    return (
        <div className="container">
            <div className="row g-2 g-lg-3">
                <div className="col-md-8 col-sm-12">
                    <img src={product.mediaUrl} className="card-img-top" alt="..."/>
                </div>
                <div className="col-md-4 col-sm-12 d-flex flex-column px-md-5">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <input className="mb-2 py-1" id="number" type="number" defaultValue="1"/>
                    <button className="btn btn-lg btn-info">Add to cart</button>
                </div>
            </div>
            <div className="mt-4">
                <p>{product.desc}</p>
            </div>
        </div>
    )
}


export async function getServerSideProps({params: {id}}) {
    const res = await fetch(`${baseUrl}/api/product/${id}`)
    const data = await res.json()
    return {
      props: {product: data}, 
    }
}


export default ProductDetils
