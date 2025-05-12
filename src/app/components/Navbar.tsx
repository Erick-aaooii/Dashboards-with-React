import { NavLink } from "react-router";

export default function Navbar() {
  const linkClasses =
    "px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200";

  const activeClass = "bg-blue-700 text-white";

  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <ul className="flex gap-6 p-4 justify-center">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Formulário
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Perfil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
