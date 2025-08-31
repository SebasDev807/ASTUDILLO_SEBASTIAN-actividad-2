interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}



export const SearchBox = ({ setQuery, query }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <div className="mx-auto">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Buscar..."
        className="border border-slate-200 w-100 p-2 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none" />
    </div>
  )
}
