import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded transition-colors hover:text-blue-500 ${
      isActive ? 'text-blue-500' : 'text-white'
    }`;

  return (
    <header className="bg-slate-800 h-16 flex items-center px-4 justify-between">
      <h1 className="text-white text-xl font-bold">Actividad 2</h1>

      <nav className="flex gap-2">
        <NavLink to="/ejercicio_1" className={linkClasses}>
          Contador
        </NavLink>
        <NavLink to="/ejercicio_2" className={linkClasses}>
          Productos
        </NavLink>
        <NavLink to="/ejercicio_3" className={linkClasses}>
          Buscador
        </NavLink>
      </nav>
    </header>
  );
};
