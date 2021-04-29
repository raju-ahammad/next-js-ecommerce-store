import ProductCard from "../Components/ProductCard";
import baseUrl from "../uttils/baseUrl";

const Home = (props) => {
  const products = props.products
  console.log(products);
  return (
    <div className="d-flex sm justify-content-between container mt-2 flex-wrap">
      {
        products.map(item => {
          return (
            <ProductCard item={item} key={item._id} />
          )
        })
      }
    </div>
  )
}



export async function getStaticProps(context) {
  const res = await fetch(`${baseUrl}/api/product`)
  const data = await res.json()
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { products: data },
  }
}

export default Home
