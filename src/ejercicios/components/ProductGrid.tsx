
import { products } from "../data/products"
import { ProductCard } from "./ProductCard"


export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">

      {products.map(product => (
        <ProductCard
          {...product}
          key={product.title}
        />
      ))}
    </div>
  )
}
