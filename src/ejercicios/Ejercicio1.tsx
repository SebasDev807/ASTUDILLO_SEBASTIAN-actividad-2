import { useEffect, useState } from "react"

export const Ejercicio1 = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    }

    const decrementar = () => {
        if (count === 0) return;
        setCount(count - 1);

    }

    const reiniciar = () => {
        setCount(0);
    }

    useEffect(() => {
        console.log({ count });
    }, [count])



    return (
        <div className="min-h-screen grid place-content-center space-y-3">

            <h1 className="text-3xl text-center">Contador: {count}</h1>

            <div className="flex gap-2">

                <button
                    className="bg-indigo-500 p-2 rounded-lg text-slate-200 font-medium"
                    onClick={decrementar}>
                    Decrementar
                </button>

                <button
                    onClick={incrementar}
                    className="bg-indigo-500 p-2 rounded-lg text-slate-200 font-medium">
                    Incrementar
                </button>

                <button
                    onClick={reiniciar}
                    className="bg-indigo-500 p-2 rounded-lg text-slate-200 font-medium">
                    Reiniciar
                </button>


            </div>

        </div>
    )
}
