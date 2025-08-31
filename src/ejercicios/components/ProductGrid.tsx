
import { products } from "../data/products"
import { ProductCard } from "./ProductCard"


export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5">

      {products.map(product => (
        <ProductCard
          features={product.features || []}
          description={product.description || ""}
          key={product.title}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}


        />
      ))}
    </div>
  )
}
