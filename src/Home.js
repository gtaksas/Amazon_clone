import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="87233222"
                        title='The lean startup' 
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product 
                        id="98743245"
                        title='Kenwood Mix Stad Mixer' 
                        price={222.99}
                        image='https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/limited_edition/Kmix%20Editions/KMX761CH_kMix-Editions_Chrome_800x600.jpg'
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id=""
                        title='' 
                        price={1}
                        image=''
                        rating={4}
                    />
                    <Product 
                        id=""
                        title='' 
                        price={1}
                        image=''
                        rating={4}
                    />
                    <Product 
                        id=""
                        title='' 
                        price={1}
                        image=''
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id=""
                        title='' 
                        price={1}
                        image=''
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
