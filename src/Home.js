import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" 
                />

                <div className="home__row">
                    <Product 
                        id={12341234}
                        title='The lean startup. The full product description' 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id={23451234}
                        title="Light switch"
                        price={20.15}
                        image="https://m.media-amazon.com/images/I/310bMKQjT5L._AC_SY200_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={34561234}
                        title="Iphone"
                        price={449.99}
                        image="https://m.media-amazon.com/images/I/41WOalZ1N5L._AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product 
                        id={45671234}
                        title="Hairbrush"
                        price={15.98}
                        image="https://m.media-amazon.com/images/I/41yn8u3qJPL._AC_SY200_.jpg"
                        rating={2}
                    />
                    <Product 
                        id={5678234}
                        title="Kenwood kMix Stand Mixer for Baking"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={341234895}
                        title="Gaming Monitor"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
