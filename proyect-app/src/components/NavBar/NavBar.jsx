import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget/CartWidget"
import style from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <>
        <div>
            <nav className={`navbar navbar-expand-lg navBarColor ${style.navBarColor}`}>
                <div className="container-fluid">
                    <Link to="/">
                    <a className="navbar-brand fs-2" >Orange Perfumería</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to="/">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/Fragancia">
                                <a className="nav-link" href="#">Fragancia</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Belleza
                                </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={"/category/Cosmética"}>
                                    <a className="dropdown-item" href="#">Cosmética</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/Cabello">
                                    <a className="dropdown-item" href="#">Cabello</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/Esmaltes">
                                    <a className="dropdown-item" href="#">Esmaltes</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/Skincare">
                                    <a className="dropdown-item" href="#">Skincare</a>
                                    </Link>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/Accesorios">
                                <a className="nav-link" aria-disabled="true">Accesorios</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to="/Cart">
                        <CartWidget/>
                    </Link>
                </div>
            </nav>
        </div>
        </>
    )
}