import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

const img = {
    logo: "https://www.saludvitalnatural.com/wp-content/uploads/2016/02/LOGO.png",
};

const Navbar = () => {
    return (
        <header className="header">
            <nav
            className="flex bg-primary__opacity text-white grid-container"
            style={{ "--opacity": 0.6 }}
            >
                <button className="burger-button">
                    <FAIcon icon="bars" />
                </button>
                <img src={img.logo} alt="vital Health logo" />
                <div className="cart-shopping">
                    <FAIcon icon="cart-shopping" />
                    <span className="bg-secondary text-black">10</span>
                </div>
                <nav className="menu-category" hidden>
                    <ul>
                        <li>Todos los productos</li>
                        <li>Laboratorio</li>
                        <li>Categorías</li>
                        <li>Artículos</li>
                        <li>Contacto</li>
                        <li>Videos</li>
                    </ul>
                </nav>
                <div className="searching-bar flex">
                    <input type="text" placeholder="Qué buscas?" />
                    <label>
                        <FAIcon icon="search" />
                    </label>
                </div>
            </nav>
        </header>
    );
};

export { Navbar };
