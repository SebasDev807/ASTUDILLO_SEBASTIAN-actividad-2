import { useEffect, useState } from "react";

export const Ejercicio1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <div className="animate__animated animate__fadeIn  animate__faster min-h-screen flex flex-col items-center justify-center bg-gradient-to-r  p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Ejercicio 1</h1>

      <div className="mb-6">
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-lg text-5xl font-extrabold text-indigo-600 transition-transform duration-200 transform hover:scale-105">
          {count}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 cursor-pointer hover:bg-red-600 active:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
        >
          - Decrementar
        </button>
        <button
          onClick={increment}
          className="bg-green-500 cursor-pointer hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
        >
          + Incrementar
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};
