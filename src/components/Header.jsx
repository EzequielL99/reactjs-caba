import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          ReactJS
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ejercicios
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/ejercicio-01"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item text-primary nav-link"
                      : "dropdown-item nav-link"
                  }
                >
                  Ejercicio 01
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ejercicio-02"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item text-primary nav-link"
                      : "dropdown-item nav-link"
                  }
                >
                  Ejercicio 02
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ejercicio-03"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item text-primary nav-link"
                      : "dropdown-item nav-link"
                  }
                >
                  Ejercicio 03
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
