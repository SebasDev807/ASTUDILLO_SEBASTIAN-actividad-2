import { ProductGrid } from "./components/ProductGrid"

export const Ejercicio2 = () => {
    return (
        <div className="px-4">
            <h1 className="text-2xl text-center font-medium">
                Productos
            </h1>

            <div className="flex items-center justify-center">

                <ProductGrid />
            </div>

        </div>
    )
}
