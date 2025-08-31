import { useState } from "react"
import { SearchBox } from "./components/SearchBox"

export const Ejercicio3 = () => {

    const [query, setQuery] = useState('');

    return (


        <div className=" animate__animated animate__fadeIn  animate__faster min-h-screen p-3 flex justify-center flex-col items-cente space-y-4">
            <SearchBox query={query} setQuery={setQuery} />
            <div className="flex flex-col items-center space-y-2">
                <h2 className="text-xl font-medium text-center">Resultados de búsqueda</h2>
                <span className="fon-bold text-indigo-500">{query}</span>
            </div>
        </div>

    )
}

