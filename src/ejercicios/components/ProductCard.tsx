import { useState } from "react";
import { ProductDetails } from "./ProductDetails";

interface Props {
    imageUrl: string;
    title: string;
    price: number;
    description: string;
    features: string[]
}


export const ProductCard = ({ imageUrl, title, price, description, features }: Props) => {


    const [isProductDeatailsOpen, setIsProductDeatailsOpen] = useState(false);

    const handleOpenProductDetails = () => {
        setIsProductDeatailsOpen(!isProductDeatailsOpen);
    }
    return (
        <>


            <div className="max-w-50 mt-4 bg-slate-200 p-4 rounded-lg">
                <img src={imageUrl} alt={title} />
                <span className="font-bold">${price}</span>
                <h2 className="text-left">{title}</h2>

                <div className="flex justify-center">

                    <button
                        onClick={handleOpenProductDetails}
                        className="mt-2 bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white py-1 px-4 rounded">
                        View Details
                    </button>
                </div>

            </div>
            {isProductDeatailsOpen && <ProductDetails
                title={title}

                imageUrl={imageUrl}
                description={description}
                isModalOpen={isProductDeatailsOpen}
                setIsModalOpen={setIsProductDeatailsOpen}
                features={features}
            />}
        </>
    )
}
