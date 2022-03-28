import { useEffect, useState } from "react";
import "../styles/Carousel.css";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

const products = [
    {
        name: "product 1",
        image: "https://picsum.photos/id/237/300/400",
    },
    {
        name: "product 2",
        image: "https://picsum.photos/id/37/300/400",
    },
    {
        name: "product 3",
        image: "https://picsum.photos/id/22/300/400",
    },
];

const Slides = ({ activeSlide, width}) => {
    return products.map((product, index) => (
        <li
            className={`carousel__slide${
                activeSlide === index ? " active" : ""
            }`}
            key={product.name}
            style={{
                left: width * index + "px",
            }}
        >
            <a href="localhost:5050">
                <img
                    className="carousel__image"
                    src={product.image}
                    alt={product.name}
                />
            </a>
        </li>
    ));
};


const CarouselNav = ({ activeSlide,handleClickNav }) => {
    //const handleClickNav = () => {}
    return products.map((product, index) => (
        <button
            key={product.name}
            className={`carousel__indicator${
                activeSlide === index ? " current" : ""
            }`}
            onClick={() => handleClickNav(index)}
        ></button>
    ));
};


const CarouselButton = ({type,handleClick}) => {
    return (
        <button 
        className={`carousel__button carousel__button--${type}`} 
        onClick={handleClick}
        >
        <FAIcon icon={`chevron-${type}`} />
        </button>
    )
}


const Carousel = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ slideWidth, setSlideWidth  ] = useState(window.innerWidth);
    //const [nextSlide, setNextSlide ] = useState();
    const [ amountToMove, setAmountToMove ] = useState(0);

    const moveToSlide = (targetSlide) => {
        setCurrentSlide(targetSlide);
        setAmountToMove(slideWidth*targetSlide); 
    }
    const moveToNextSlide = () => {
        const nextSlide = currentSlide < products.length - 1?
            currentSlide + 1: 0;
        moveToSlide( nextSlide);
    }

    const moveToPreviusSlide = () => {
        const nextSlide = currentSlide > 0?
            currentSlide - 1: products.length - 1;
        moveToSlide( nextSlide);
    }

    const toggleToSlideSelected = (targetSlide) => {
        moveToSlide(targetSlide);
    }

    useEffect(() => {
        window.addEventListener("resize", () =>
            setSlideWidth(window.innerWidth)
        );  
    });
    return (
        <div className="carousel">

            <CarouselButton type="left" handleClick={moveToPreviusSlide}/>

            <div className="carousel__track-container">
                <ul 
                className="carousel__track"
                style={{transform: `translateX(-${amountToMove}px)`}}
                >
                    <Slides 
                    activeSlide={currentSlide}
                    width={slideWidth}
                    />
                </ul>
            </div>
            <div className="carousel__nav">
                <CarouselNav activeSlide={currentSlide} 
                handleClickNav={toggleToSlideSelected}
                />
            </div>
            <CarouselButton type="right" handleClick={moveToNextSlide}/>

        </div>
    );
};

export { Carousel };
