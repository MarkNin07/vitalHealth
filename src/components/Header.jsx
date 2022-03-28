import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "./Carousel"
import { MenuCategories } from "./MenuCategories";
import { useState } from "react";

const img = {
    logo: "https://www.saludvitalnatural.com/wp-content/uploads/2016/02/LOGO.png",
};

const Header = () => {
    const [isMenuActive, setMenuActive] = useState(true);

    const toggleMenuStatus = () => setMenuActive(!isMenuActive);
    
    return (
        <header className="header">
            <nav
            className="flex bg-primary__opacity text-white grid-container"
            style={{ "--opacity": 0.6 }}
            >
                <button 
                className="burger-button"
                onClick={toggleMenuStatus}
                >
                    <FAIcon icon="bars" />
                </button>
                <MenuCategories 
                isActive= {isMenuActive}
                handleStatus={toggleMenuStatus}
                />
                
                <img src={img.logo} alt="vital Health logo" />
                <div className="cart-shopping">
                    <FAIcon icon="cart-shopping" />
                    <span className="bg-secondary text-black">10</span>
                </div>
                <div className="searching-bar flex">
                    <input type="text" placeholder="Qué buscas?" />
                    <label>
                        <FAIcon icon="search" />
                    </label>
                </div>
            </nav>
            <Carousel/>
        </header>
    );
};

export { Header };
