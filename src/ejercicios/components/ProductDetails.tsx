interface Props {
  title: string;
  price?: number;
  description?: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  features?: string[];
  imageUrl: string;
  sizes?: string[];
  stock?: number;
}

export const ProductDetails = ({
  title,
  description,
  isModalOpen,
  setIsModalOpen,
  features,
  imageUrl,
  price,
  sizes,
  stock
}: Props) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div
      className={`
        animate__animated animate__fadeIn  animate__faster fixed inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm transition-opacity ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg p-6 w-96 max-w-full space-y-4 transform transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'
          }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-contain rounded-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">{title}</h2>
        {price && <span className="text-blue-600 font-bold text-xl">${price}</span>}
        <p className="text-gray-700">{description}</p>
        <hr className="border-slate-200" />
        <ul className="list-disc pl-5 space-y-1">
          {features && features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {sizes && <p className="text-gray-600">Tallas disponibles: {sizes.join(', ')}</p>}
        {stock !== undefined && <p className="text-gray-600">Stock disponible: {stock}</p>}

        <button
          onClick={handleCloseModal}
          className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
