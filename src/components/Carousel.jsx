const product_image1 = "https://picsum.photos/id/237/400/300";
const product_image2 = "https://picsum.photos/id/23/400/300";
const product_image3 = "https://picsum.photos/id/27/400/300";
const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel__track-container">
                <ul className="courousel__track">
                    <il className="carouse__slide"><img src={product_image1} alt="product 1" /></il>
                    <il className="carouse__slide"><img src={product_image2} alt="product 2" /></il>
                    <il className="carouse__slide"><img src={product_image3} alt="product 3" /></il>
                </ul> 
            </div>
        </div>
    )
}

export { Carousel }