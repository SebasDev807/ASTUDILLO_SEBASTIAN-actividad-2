interface Props {
  title: string;
  price?: string;
  description: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  features: string[]
  imageUrl: string;
}



export const ProductDetails = ({
  title,
  description,
  isModalOpen,
  setIsModalOpen,
  features,
  imageUrl,
  price }: Props) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }


  return (

    <div className="fixed inset-0 shadow-2xl bg-opacity-50 flex items-center justify-center z-50 text-2">


      <div className="bg-white rounded-2xl shadow-lg p-6 w-96 space-y-5">
        <img src={imageUrl} alt={title} className="mb-4 rounded w-50 mx-auto" />
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <hr className="text-slate-200 border-1" />

        <ul className="list-disc pl-5">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        
        <button
          onClick={handleCloseModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cerrar
        </button>
      </div>


    </div>

  )
}
