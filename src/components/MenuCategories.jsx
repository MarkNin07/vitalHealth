import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

const MenuCategories = ({isActive,handleStatus}) => {
    const  clickingOver = (e) => {
        //const menu = e.target.classList.contains('menu');
        const menu = e.target.closest('.menu');
        if (menu) return;

        closeMenu();
    }

    const closeMenu = () => {
        handleStatus();
    }

    return <div 
    className={`layout-over ${!isActive?'is-hidden':null}`} 
    aria-labelledby="menu"
    onClick={clickingOver}
    >
        <nav className="menu menu--over bg-white text-black">
            <button className="menu__close-button" onClick={closeMenu}>
                <FAIcon icon="close" />
            </button>
            <ul className="menu__items fs-18 uppercase">
                <li>Todos los productos</li>
                <li>Laboratorio</li>
                <li>Categorías</li>
                <li>Artículos</li>
                <li>Contacto</li>
                <li>Videos</li>
            </ul>
        </nav>
    </div>
}

export { MenuCategories };