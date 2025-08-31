import { useState } from "react";
import { ProductDetails } from "./ProductDetails";

interface Props {
    title: string;
    imageUrl: string;
    price: number;
    description?: string;
    features?: string[];
    sizes?: string[];
    stock?: number;
}

export const ProductCard = ({
    imageUrl,
    title,
    price,
    description,
    features,
    sizes,
    stock
}: Props) => {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

    const handleOpenProductDetails = () => {
        setIsProductDetailsOpen(!isProductDetailsOpen);
    };

    return (
        <>
            <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-4">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-contain"
                />
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <span className="text-blue-600 font-bold text-xl">${price}</span>
                    <button
                        onClick={handleOpenProductDetails}
                        className="mt-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                        Ver detalles
                    </button>
                </div>
            </div>

            {isProductDetailsOpen && (
                <ProductDetails
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                    features={features}
                    sizes={sizes}      
                    stock={stock}      
                    isModalOpen={isProductDetailsOpen}
                    setIsModalOpen={setIsProductDetailsOpen}
                />
            )}
        </>
    );
};
