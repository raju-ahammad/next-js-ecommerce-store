import Link from "next/link"
import styles from '../styles/productCard.module.css'
const ProductCard = ({item}) => {
    const { name, price, desc, mediaUrl, _id } = item
    return (
        <div className={`card ${styles.card} mb-2`}>
            <Link href={'/product/[id]'} as={`/product/${_id}`}><img src={mediaUrl} className="card-img-top" alt="..."/></Link>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
