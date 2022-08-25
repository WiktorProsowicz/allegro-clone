import '../styles/FirstRow.css';
import FirstRowNav from './FirstRowNav';
import FirstRowMiddle from './FirstRowMiddle';
import ProductShortHorizontal from './ProductShortHorizontal';
import { generateProductsArray } from '../utils/temporaryProducts';



function FirstRow() {

    
    return (
        <div className="firstRow">
            <div className="firstRow__inner">

                <FirstRowNav />

                <FirstRowMiddle />

                <div className="firstRow__signin">

                    <div className="firstRow__signinOption">
                        <a href="">
                            <img src="https://a.allegroimg.com/original/12316d/2268070d49aaab12c8e5983855b0" />
                            <span>Wypróbuj 5 darmowych dostaw Smart! na start</span>
                        </a>
                    </div>

                    <div className="firstRow__signinOption">
                        <a href="">
                            <img src="https://a.allegroimg.com/original/12a05c/c619d2d845dc96bdabdb3fe30a99" />
                            <span>Kupuj, sprzedawaj rzeczy z drugiej ręki</span>
                        </a>
                    </div>

                    <div className="firstRow__signinOption">
                        <a href="">
                            <img src="https://a.allegroimg.com/original/12b12f/c32e06a04bf2a400e49e9011bab4" />
                            <span>Pobierz aplikację i zyskaj 5 Monet, a kolejne 5 za pierwszy zakup</span>
                        </a>
                    </div>

                    <button className="firstRow__signinBtn">
                        <span>ZALOGUJ SIĘ</span>
                    </button>

                </div>

                <div className="firstRow__occasion">

                    <div className="firstRow__occasionHeader">
                        <span>Okazja wybrana dla ciebie</span>
                    </div>

                    <div className="firstRow__occasionInner">
                        <ProductShortHorizontal product={generateProductsArray(1)[0]}/>
                    </div>

                    <div className="firstRow__occasionBottom">
                        <a><span>ZOBACZ WIĘCEJ OFERT</span></a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FirstRow;