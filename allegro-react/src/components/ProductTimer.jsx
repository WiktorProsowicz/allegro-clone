import { useEffect } from 'react';
import '../styles/ProductTimer.css';
import ProductSmart from './ProductSmart';

function ProductTimer({product, deadline}) {

    let msecs;  // number of miliseconds left to the deadline
    let allEventsMounted = false;
    let counter;    // object to controll calling updateTimeLeft function
    let tilesContent = [0, 0, 0, 0, 0, 0];  // numbers displayed in counterTiles

    useEffect(() => {

        if(!allEventsMounted){
            const currentDate = new Date();

            msecs = deadline.getTime() - currentDate.getTime();

            counter = setInterval(updateTimeLeft, 1000);

            allEventsMounted = true;
        }
        
    },[]);

    const updateTimeLeft = () => {
        msecs -= 1000;
        if(msecs < 0){
            clearInterval(counter);

            tilesContent[5] = 0;
            tilesContent[4] = 0;
            tilesContent[3] = 0;
            tilesContent[2] = 0;
            tilesContent[1] = 0;
            tilesContent[0] = 0;

            for(let i = 0; i < 6; i++) {
                document.querySelector("#productTimerCounterTile-" + (i + 1)).innerHTML = tilesContent[i];
            }

            return;
        }

        let temp = msecs;

        temp = (temp - temp % 1000) / 1000; // secs
        let secs = temp % 60;

        tilesContent[5] = secs % 10;
        tilesContent[4] = (secs - secs % 10) / 10;

        temp = (temp - temp % 60) / 60; // mins
        let mins = temp % 60;

        tilesContent[3] = mins % 10;
        tilesContent[2] = (mins - mins % 10) / 10;

        temp = (temp - temp % 60) / 60; // hours
        let hours = temp;

        tilesContent[1] = hours % 10
        tilesContent[0] = (hours - hours % 10) / 10;

        for(let i = 0; i < 6; i++) {
            document.querySelector("#productTimerCounterTile-" + (i + 1)).innerHTML = tilesContent[i];
        }

    }

    return (
        <div className="productTimer">
            <div className="productTimer__header">
                <h2>Tylko dla klientów Allegro Smart!</h2>
            </div>

            <div className="productTimer__inner">
                
                <div className="productTimer__counter">
                    <span className="productTimer__counterCaption">Kończy się za:</span>

                    <span id="productTimerCounterTile-1" className="productTimer__counterTile">0</span>
                    <span id="productTimerCounterTile-2" className="productTimer__counterTile">0</span>

                    <span className="productTimer__counterColon">:</span>

                    <span id="productTimerCounterTile-3" className="productTimer__counterTile">0</span>
                    <span id="productTimerCounterTile-4" className="productTimer__counterTile">0</span>

                    <span className="productTimer__counterColon">:</span>

                    <span id="productTimerCounterTile-5" className="productTimer__counterTile">0</span>
                    <span id="productTimerCounterTile-6" className="productTimer__counterTile">0</span>
                </div>

                <div className="productTimer__productContainer">

                    <ProductSmart product={product}/>

                </div>

            </div>

            <div className="productTimer__bottom">
                <span>
                    <a href="#">ZOBACZ WIĘCEJ</a>
                </span>
            </div>
        </div>
    );
}

export default ProductTimer;